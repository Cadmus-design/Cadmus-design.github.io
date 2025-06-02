var imgurTool;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function deleteBtnClick(element) {
  const hash = element.getAttribute("deletehash");
  imgurTool.deleteImage(hash, element);
}

function copyImageUrl(element) {
  element.select();
  element.setSelectionRange(0, 99999);
  try {
    document.execCommand("copy");
  } catch {}
}

class ImgurAPI {
  static accesstoken = null;
  static imgur_url = "https://api.imgur.com";
  static worker_url = "https://api.imgur.com";
  //static worker_url = 'http://127.0.0.1:8787';

  static get_headers() {
    let headers = new Headers();
    if (this.accesstoken) {
      //headers.set('accesstoken', this.accesstoken);
      headers.set("authorization", "Bearer " + this.accesstoken);
    }
    return headers;
  }

  static createAlbum(payload = {}) {
    let headers = this.get_headers();
    headers.set("content-type", "application/json");
    return fetch(`${this.worker_url}/3/album?client_id=d70305e7c3ac5c6`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });
  }

  static updateAlbum(hash, payload) {
    let headers = this.get_headers();
    headers.set("content-type", "application/json");
    return fetch(
      `${this.imgur_url}/3/album/${hash}?client_id=d70305e7c3ac5c6`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(payload)
      }
    );
  }

  static deleteAlbum(hash) {
    return fetch(
      `${this.imgur_url}/3/album/${hash}?client_id=d70305e7c3ac5c6`,
      {
        method: "DELETE",
        headers: this.get_headers()
      }
    );
  }

  static uploadImage(payload) {
    return fetch(`${this.worker_url}/3/upload?client_id=d70305e7c3ac5c6`, {
      method: "POST",
      headers: this.get_headers(),
      body: payload
    });
  }

  static deleteImage(hash) {
    return fetch(
      `${this.imgur_url}/3/image/${hash}?client_id=d70305e7c3ac5c6`,
      {
        method: "DELETE",
        headers: this.get_headers()
      }
    );
  }
}

class ImgurTool {
  constructor() {
    this.g_album = null;
    this.g_images = [];

    this.initializeElements();
    this.bindEventListeners();
    this.loadConfig();
    this.checkAlbumBlock();
    this.restoreImages();

    console.log(this);
  }

  loadConfig() {
    let access_token = localStorage.getItem("imgur_access_token");
    let album = localStorage.getItem("imgur_album");
    let images = localStorage.getItem("imgur_images");
    if (access_token) {
      ImgurAPI.accesstoken = access_token;
      this.elements.access_token.value = access_token;
    }
    if (album) {
      this.g_album = JSON.parse(album);
    }
    if (images) {
      this.g_images = JSON.parse(images);
    }
  }

  saveConfig() {
    if (ImgurAPI.accesstoken) {
      localStorage.setItem("imgur_access_token", ImgurAPI.accesstoken);
    } else {
      localStorage.removeItem("imgur_access_token");
    }
    if (this.g_album) {
      localStorage.setItem("imgur_album", JSON.stringify(this.g_album));
    } else {
      localStorage.removeItem("imgur_album");
    }
    if (this.g_images.length > 0) {
      localStorage.setItem("imgur_images", JSON.stringify(this.g_images));
    } else {
      localStorage.removeItem("imgur_images");
    }
  }

  resetConfig() {
    ImgurAPI.accesstoken = null;
    this.g_album = null;
    this.g_images = [];
    this.elements.access_token.value = "";
    this.elements.image_list.innerHTML = "";
    this.checkAlbumBlock();
    this.saveConfig();
  }

  initializeElements() {
    this.elements = {
      access_token: document.querySelector("#access_token"),
      reset: document.querySelector("#resetBtn"),
      upload: document.querySelector("#uploadBtn"),
      upload_files: document.querySelector("#uploadFiles"),
      upload_progress: document.querySelector("#uploadProgress"),
      upload_progress_bar: document.querySelector(".progress-bar"),
      album_block: document.querySelector("#albumBlock"),
      album_link: document.querySelector("#albumLink"),
      album_create: document.querySelector("#createAlbumBtn"),
      album_delete: document.querySelector("#deleteAlbumBtn"),
      image_list: document.querySelector("#imageList")
    };
  }

  bindEventListeners() {
    this.elements.reset.addEventListener("click", () => this.resetConfig());
    this.elements.album_create.addEventListener("click", () =>
      this.createAlbum()
    );
    this.elements.album_delete.addEventListener("click", () =>
      this.deleteAlbum()
    );
    this.elements.upload.addEventListener("click", () => this.uploadImages());
  }

  getAccessToken() {
    let token = this.elements.access_token.value;
    ImgurAPI.accesstoken = token.length > 30 ? token : null;
  }

  checkAlbumBlock() {
    if (this.g_album) {
      this.elements.album_block.classList.remove("d-none");
      this.elements.album_link.setAttribute(
        "href",
        "https://imgur.com/a/" + this.g_album.id
      );
    } else {
      this.elements.album_block.classList.add("d-none");
      this.elements.album_link.setAttribute("href", "#");
    }
  }

  restoreImages() {
    this.g_images.forEach((json) => this.appendImage(json));
  }

  updateUploadProgress(current, total) {
    const percentage = (current / total) * 100;
    this.elements.upload_progress_bar.style.width = `${percentage}%`;
  }

  appendImage(json) {
    console.log(json);

    const template = document.querySelector(".image-template");
    const clone = template.cloneNode(true);
    clone.classList.remove("image-template");

    const img = clone.querySelector("img");
    const input = clone.querySelector(".image-url");
    const imgName = clone.querySelector(".image-name");
    const uploadTime = clone.querySelector(".upload-time");
    const fileSize = clone.querySelector(".file-size");
    const deleteBtn = clone.querySelector("button");

    fetch(json.link)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        img.src = url;
      });

    img.alt = json.name;
    input.value = json.link;
    deleteBtn.setAttribute("deletehash", json.deletehash);

    imgName.textContent = `檔案名稱: ${json.name}`;
    uploadTime.textContent = `上傳時間: ${new Date(
      json.datetime * 1000
    ).toLocaleString()}`;
    fileSize.textContent = `檔案大小: ${this.formatFileSize(json.size)}`;

    if (!this.g_images.includes(json)) {
      this.g_images.push(json);
      this.saveConfig();
    }

    this.elements.image_list.appendChild(clone);
  }

  formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KiB", "MiB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  async deleteImage(hash, element) {
    this.getAccessToken();
    const response = await ImgurAPI.deleteImage(hash);
    if (!response.ok) return;
    const json = await response.json();
    if (json.success) {
      this.g_images = this.g_images.filter((img) => img.deletehash !== hash);
      this.saveConfig();
      element.closest(".image-block").remove();
    }
  }

  async uploadImages() {
    const files = Array.from(this.elements.upload_files.files);
    if (files.length === 0) return;
    this.elements.upload.disabled = true;
    this.elements.upload_progress.classList.remove("d-none");
    this.getAccessToken();
    let uploadPromises = [];
    let count = 0;
    for (let file of files) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("type", "file");
      formData.append("name", file.name);
      let promise = ImgurAPI.uploadImage(formData)
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            this.appendImage(json.data);
            this.updateUploadProgress(++count, files.length);
          }
        });
      uploadPromises.push(promise);
      await sleep(1000);
    }
    await Promise.all(uploadPromises);
    this.elements.upload.disabled = false;
    this.elements.upload_files.value = "";
    this.elements.upload_progress.classList.add("d-none");
    this.updateAlbum();
  }

  async updateAlbum() {
    if (!this.g_album || this.g_images.length === 0) return;
    this.getAccessToken();
    const payload = {
      deletehashes: this.g_images.map((img) => img.deletehash),
      cover: ""
    };
    const response = await ImgurAPI.updateAlbum(
      this.g_album.deletehash,
      payload
    );
  }

  async deleteAlbum() {
    this.getAccessToken();
    let hash = ImgurAPI.accesstoken ? this.g_album.id : this.g_album.deletehash;
    const response = await ImgurAPI.deleteAlbum(hash);
    if (!response.ok) return;
    const json = await response.json();
    if (json.success) {
      this.g_album = null;
      this.saveConfig();
      this.checkAlbumBlock();
    }
  }

  async createAlbum() {
    this.getAccessToken();
    const response = await ImgurAPI.createAlbum();
    if (!response.ok) return;
    const json = await response.json();
    if (json.data.deletehash) {
      this.g_album = json.data;
      this.saveConfig();
      this.checkAlbumBlock();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  imgurTool = new ImgurTool();
});
