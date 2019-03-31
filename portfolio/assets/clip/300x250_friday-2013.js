(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_friday_2013_atlas_", frames: [[328,217,90,103],[285,142,158,73],[177,217,149,72],[177,150,17,22],[445,136,50,12],[0,0,175,235],[285,0,108,140],[395,0,107,134],[177,0,106,148]]}
];


// symbols:



(lib.drink22 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.food4 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.food5 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pic4 = function() {
	this.spriteSheet = ss["300x250_friday_2013_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.回 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 回 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/h7IDlgWIAaELIghADIgBgOIilAQIACAQIggADgAhbhcIARC5IClgQIgSi5gAhAhFIBxgLIANCDIhyALgAgdgmIAGA/IAxgFIgGg/g");
	mask.setTransform(80.9,51.4);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],-1.4,-14.5,1.5,14.4).s().p("ArehHIWgiRIAdEgI2gCRg");
	this.shape.setTransform(77.3,51.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.回, new cjs.Rectangle(68.2,36.8,25.5,29.2), null);


(lib.勢 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 勢 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhQB1QAZgGARgJQARgHAIgLIABgBIhCAHIgDgfIBTgHIACgJIABgKIAgABIgBAHIgBAHIBpgKQADAdAAASQAAATgDAHQgBAGgEADQgDAFgFACIgNAEIgRADIgRAAIgRgBIgIgfQAJACALABIATgBIAHgBIAEgBIADgCIACgEIAAgLIAAgNIhTAIQgDAIgFAIQgEAIgGAFQgXAZgzANgAhhAYQAagDAWgFIgBgOIgoAFIgDgZIAogEIgBgRIAcgDIgDgGIgBgIIgBgIIgTACIgDAKQgBAFgEAEQgFAIgKAGQgJAGgOAFIgMgaQAKgDAHgDQAGgDAEgEIABgCIABgBIgZACIgDgZIAwgEIAAgIIgoAEIgDgZIAogFIgBgMIAfgDIABAMIAngDIADAZIgnAEIAAAIIAvgFIACAZIgYADIAAABIABAIQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAGgCIAEgCIAAgCIAAgGIAXAGIAAAFIAAAFIAMgRIAEACIAEACIgBgJIAAgLIgaADIgDgfIAbgDIgDgeIAbgDIADAfIAlgEIAHBQIADATIACAMIACADIADABIAAgCIABgEIAAgLIgCgSIAaAJQAAATgCAMQgBALgEAGQgDAFgEACQgEACgEABQgIAAgFgBQgGgCgFgFQgEgEgDgIQgEgIgCgNIgKAPIgHgGIgGgFQgFAMgGAMQgHAMgJAJIgQgQIABAFIg5AOIhAAOgAAcALQAHgIAFgJQAEgJADgLIABgBIAAgBIgTgNQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgKADIgOACIgFAAIgHAAIgHgBIgFgEIABAMIAngDIADAZIgnADIABAKIAWgFIAWgEgABeglIgFgyIgJABIABAUIgBATIAHAFIAHAFgAibguIAAABIAAABg");
	mask.setTransform(48.1,53.9);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],-1.4,-14.5,1.5,14.4).s().p("ArehHIWgiRIAdEgI2gCRg");
	this.shape.setTransform(77.3,51.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.勢, new cjs.Rectangle(32.5,39.1,31.2,29.5), null);


(lib.底線 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DCD4AA").ss(1.5,1,1).p("AnlBKIBZgaQBxgfB1gXQF2hOEWAO");
	this.shape.setTransform(48.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.底線, new cjs.Rectangle(-1,-1,99.3,16.7), null);


(lib.歸 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 歸 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah1BzIAFgBIAFgBIgHhBIAdgDIAGA8IAEgBIADgCIgGhGIgmAEIgOiWIAYgCIADgLIACgMIAhAHIgCAHIgCAGIAmgEIAHBIIhDAGIABAJIBEgHIAHBGIgeACIABANIAggDIADAfIggADIACAUIAPgGIAPgFIAHAcQgWAKgYAKQgZAKgbAJgAhagIIABANIAmgEIgBgNgAhihYIACAQIAlgEIgCgQgAArAuIgNACIAGA+IgfADIgIhdIArgEIgCgVIgcADIACAPIgcACIgEgqICRgOIAEAqIgcADIgCgPIgeADIACAVIA2gFIAGA6QACATgIAKQgIAKgRACIgLABIgIggIAIABIAJAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIgBgLIgCgVIgXACIAIBYIgfADgAgJhAIBXgIIgBgJIhmAKIgCgcIBlgJIgBgJIhXAIIgCgcIB2gLIADAlIARgCIACAcIgQABIADAlIh2ALg");
	mask.setTransform(110.8,48.3);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],-1.4,-14.5,1.5,14.4).s().p("ArehHIWgiRIAdEgI2gCRg");
	this.shape.setTransform(77.3,51.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.歸, new cjs.Rectangle(97.7,33.4,26.3,29.8), null);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-26.9,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(-97.4,7.5,141.2,12.6), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fridays 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(-13.1,-47.4);

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.231,1],0,-10,-0.1,10.1).s().p("AuDBhIABjIIcGAHIgCDHg");
	this.shape.setTransform(-13.2,-47.4,0.972,0.881);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 強勢回歸 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("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");
	mask_1.setTransform(0.2,-15.5);

	// 圖層 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.231,1],0,-12.8,-0.1,12.9).s().p("AvwB8IABj/IfgAIIgCD/g");
	this.shape_1.setTransform(0.2,-15.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-99.6,-56.1,199.3,53), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALlBdQgNgNAAgaIAAhrQAAgaANgNQAMgOAXgBQAYABAMAOQAMANABAaIAAAUIgfAAIAAgWQAAgMgEgEQgFgFgHgBQgJABgEAFQgEAEAAAMIAABwQAAALAEAEQAEAFAJAAQAHAAAFgFQAEgEAAgLIAAgeIAfAAIAAAbQgBAagMANQgMAOgYABQgXgBgMgOgAieBdQgNgNAAgaIAAhrQAAgaANgNQAMgOAXgBQAYABAMAOQAMANABAaIAAAUIgfAAIAAgWQAAgMgEgEQgFgFgHgBQgJABgEAFQgEAEAAAMIAABwQAAALAEAEQAEAFAJAAQAHAAAFgFQAEgEAAgLIAAgeIAfAAIAAAbQgBAagMANQgMAOgYABQgXgBgMgOgAlVBdQgMgNAAgaIAAgOIAeAAIAAARQAAALAFAEQAEAFAIAAQAIAAAEgFQAEgEABgLQgBgNgGgJQgHgKgJgJIgTgRQgIgJgHgNQgGgNAAgRQgBgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQAAgMgEgEQgFgFgHgBQgIABgEAFQgFAEAAAMQABAMAGAJQAHALAJAIIASARQAKAJAGANQAHANgBARQAAAagMANQgMAOgYABQgXgBgMgOgAnKBdQgMgNAAgaIAAgOIAeAAIAAARQAAALAFAEQAEAFAIAAQAIAAAEgFQAEgEABgLQgBgNgGgJQgHgKgJgJIgTgRQgIgJgHgNQgGgNAAgRQgBgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQAAgMgEgEQgFgFgHgBQgIABgEAFQgFAEAAAMQABAMAGAJQAHALAJAIIASARQAKAJAGANQAHANgBARQAAAagMANQgMAOgYABQgXgBgMgOgAsrBdQgMgNAAgaIAAhrQAAgaAMgNQAMgOAYgBQAXABANAOQAMANgBAaIAAAUIgeAAIAAgWQAAgMgFgEQgEgFgIgBQgIABgEAFQgEAEAAAMIAABwQAAALAEAEQAEAFAIAAQAIAAAEgFQAFgEAAgLIAAgeIAeAAIAAAbQABAagMANQgNAOgXABQgYgBgMgOgAF4BpIAAjRIAxAAQAZAAALAMQAMAMAAAZIAAAHQgBAQgFAKQgEALgMAFQANAFAGALQAGALgBARIAAARQABAYgMANQgNANgYAAgAGZBLIASAAQAIAAAEgEQAFgFgBgMIAAgSQAAgOgEgGQgFgGgMAAIgNAAgAGZgSIAMAAQAJAAAFgGQAFgEAAgNIAAgMQAAgLgDgFQgFgFgIAAIgPAAgABNBpIgGgmIgnAAIgGAmIgcAAIAfjRIAwAAIAgDRgAAkAmIAfAAIgPhpgAjoBpIAAjRIAhAAIAADRgAoIBpIgFgmIgoAAIgGAmIgdAAIAgjRIAvAAIAiDRgAoxAmIAfAAIgQhpgAq8BpIAAjRIAhAAIAACzIA1AAIAAAegAJJA9IAAgwIguAAIAAgSIAuAAIAAgvIATAAIAAAvIAuAAIAAASIguAAIAAAwgADcA9IAAgwIgtAAIAAgSIAtAAIAAgvIAUAAIAAAvIAtAAIAAASIgtAAIAAAwg");
	mask.setTransform(30.3,-26.6);

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],0.1,-11.4,0,11.5).s().p("AtHBwIACjkIaNAFIAADkg");
	this.shape.setTransform(30.4,-26.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-52.1,-37.3,164.9,21.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMBdQgMgNAAgaIAAhrQAAgaAMgNQAMgOAXgBQAYABAMAOQAMANAAAaIAAAUIgeAAIAAgWQAAgMgFgEQgEgFgIgBQgIABgEAFQgEAEAAAMIAABwQAAALAEAEQAEAFAIAAQAIAAAEgFQAFgEAAgLIAAgeIAeAAIAAAbQAAAagMANQgMAOgYABQgXgBgMgOgAiqBdQgNgNAAgaIAAgOIAfAAIAAARQAAALAEAEQAFAFAIAAQAHAAAFgFQAEgEAAgLQAAgNgGgJQgHgKgJgJIgTgRQgJgJgGgNQgGgNgBgRQAAgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQAAgMgEgEQgFgFgHgBQgIABgEAFQgFAEAAAMQABAMAGAJQAGALAKAIIASARQAKAJAGANQAGANAAARQAAAagMANQgMAOgYABQgXgBgMgOgAkfBdQgNgNAAgaIAAgOIAfAAIAAARQAAALAEAEQAFAFAIAAQAHAAAFgFQAEgEAAgLQAAgNgGgJQgHgKgJgJIgTgRQgJgJgGgNQgGgNgBgRQAAgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQAAgMgEgEQgFgFgHgBQgIABgEAFQgFAEAAAMQABAMAGAJQAGALAKAIIASARQAKAJAGANQAGANAAARQAAAagMANQgMAOgYABQgXgBgMgOgAqABdQgNgNAAgaIAAhrQAAgaANgNQAMgOAXgBQAYABAMAOQAMANAAAaIAAAUIgeAAIAAgWQAAgMgFgEQgEgFgIgBQgIABgEAFQgEAEAAAMIAABwQAAALAEAEQAEAFAIAAQAIAAAEgFQAFgEAAgLIAAgeIAeAAIAAAbQAAAagMANQgMAOgYABQgXgBgMgOgAIqBpIAAjRIAxAAQAYAAAMAMQALAMAAAZIAAAHQAAAQgFAKQgFALgLAFQANAFAGALQAGALgBARIAAARQAAAYgMANQgMANgYAAgAJKBLIATAAQAIAAAEgEQAEgFAAgMIAAgSQAAgOgFgGQgFgGgLAAIgOAAgAJKgSIANAAQAJAAAFgGQAFgEAAgNIAAgMQAAgLgEgFQgEgFgIAAIgQAAgAD4BpIgGgmIgnAAIgGAmIgdAAIAgjRIAvAAIAhDRgADPAmIAfAAIgQhpgAg9BpIAAjRIAhAAIAADRgAldBpIgGgmIgnAAIgGAmIgdAAIAgjRIAvAAIAhDRgAmGAmIAfAAIgQhpgAoRBpIAAjRIAgAAIAACzIA1AAIAAAegAGMA9IAAgwIguAAIAAgSIAuAAIAAgvIATAAIAAAvIAuAAIAAASIguAAIAAAwg");
	mask.setTransform(30.2,-26.6);

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],0.1,-11.4,0,11.5).s().p("AqdBwIABjkIU6AFIAADkg");
	this.shape.setTransform(30.9,-26.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-35.1,-37.3,130.7,21.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADGBdQgMgNAAgaIAAhrQAAgaAMgNQANgOAXgBQAYABAMAOQAMANAAAaIAAAUIgeAAIAAgWQgBgMgEgEQgEgFgIgBQgIABgEAFQgFAEAAAMIAABwQAAALAFAEQAEAFAIAAQAIAAAEgFQAEgEABgLIAAgeIAeAAIAAAbQAAAagMANQgMAOgYABQgXgBgNgOgAAQBdQgNgNAAgaIAAgOIAfAAIAAARQgBALAFAEQAEAFAJAAQAHAAAFgFQAEgEAAgLQAAgNgGgJQgHgKgJgJIgTgRQgJgJgHgNQgFgNgBgRQAAgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQgBgMgEgEQgEgFgHgBQgIABgFAFQgEAEAAAMQABAMAGAJQAGALAJAIIATARQAKAJAFANQAHANAAARQAAAagMANQgMAOgYABQgYgBgLgOgAhkBdQgNgNAAgaIAAgOIAfAAIAAARQgBALAFAEQAEAFAJAAQAHAAAFgFQAEgEAAgLQAAgNgGgJQgHgKgJgJIgTgRQgJgJgHgNQgFgNgBgRQAAgaAMgNQAMgOAYgBQAXABAMAOQAMANAAAaIAAAIIgeAAIAAgKQgBgMgEgEQgEgFgHgBQgIABgFAFQgEAEAAAMQAAAMAHAJQAGALAJAIIATARQAKAJAFANQAHANAAARQAAAagMANQgMAOgYABQgYgBgLgOgAnGBdQgMgNAAgaIAAhrQAAgaAMgNQAMgOAYgBQAYABAMAOQAMANAAAaIAAAUIgfAAIAAgWQABgMgFgEQgEgFgIgBQgIABgFAFQgDAEAAAMIAABwQAAALADAEQAFAFAIAAQAIAAAEgFQAFgEgBgLIAAgeIAfAAIAAAbQAAAagMANQgMAOgYABQgYgBgMgOgAGyBpIgFgmIgoAAIgFAmIgeAAIAhjRIAvAAIAhDRgAGoAmIgPhpIgPBpIAeAAgAB9BpIAAjRIAgAAIAADRgAiiBpIgGgmIgnAAIgHAmIgcAAIAgjRIAvAAIAhDRgAisAmIgQhpIgQBpIAgAAgAlWBpIAAjRIAgAAIAACzIA1AAIAAAeg");
	mask.setTransform(30.6,-26.6);

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],0.1,-14.5,0.1,14.6).s().p("AoHCOIABkiIQOAHIAAEig");
	this.shape.setTransform(30.9,-26.5,1,0.79);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-16.1,-37.3,93.4,21.5), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fridays 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(76.7,15.2);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.231,1],-1,-9.9,1,10).s().p("ArsgYIXEiVIAVDHI3ECUg");
	this.shape.setTransform(76.5,15.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(3.7,-0.4,145.9,31.2), null);


(lib.影 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEiGnQitgUhqgiQjxhOiJhGQkSiNiCjIQg0h4AshMQANgYAVgRIATgNQA9gkB4gSQDwgmEnBWQEoBWDgCSQBwBJA1A3IAgAgQAlApAYArQBKCMhdBvQhWA7h4ATIhmAHQhCgDhVgKg");
	this.shape.setTransform(88.8,51);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.影, new cjs.Rectangle(8.8,7.3,160.1,87.3), null);


(lib.pic4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmiAyQhSqugCAAINRhkICcW3ItHAKIhSqvg");
	mask.setTransform(50.6,74.7);

	// 圖層 1
	this.instance = new lib.pic4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic4_1, new cjs.Rectangle(0.3,1,100.7,147), null);


(lib.pic3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am4A0QhDpgACACINbhrICZUoItwACIhDphg");
	mask.setTransform(51.3,67.2);

	// 圖層 1
	this.instance = new lib.pic3();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic3_1, new cjs.Rectangle(0.7,1,101.3,132.3), null);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoEpQINshkICdVmItoADg");
	mask.setTransform(51.3,71);

	// 圖層 1
	this.instance = new lib.pic2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2_1, new cjs.Rectangle(0,1.7,103,138.4), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AttSBMgAEgheIXLixMAEYAkcg");
	mask.setTransform(86.8,119);

	// 圖層 1
	this.instance = new lib.pic1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(0,2.4,175,232.7), null);


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(0,0,17,22), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 訂位 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AltA1IA1gFIAFA1IgQACIAAgGIgUACIAAAGIgQACgAlaBEIABAPIAUgCIgCgPgAkkBiIgEgSIALABIAKgCIACAAIACgCIAAgDIAAgFIgJhZIgfADIgBgSIBJgIIABASIgZADIAKBdIAAAMIgCAHQgEAHgMABIgLAAIgKAAgAjIAPIgEAIIgEAHIgMgSQAJgPAHgRQAGgRADgRIARAEQgBAIgDAHIgDAPIAKBrIgRACgAiuBCIAzgFQADgTACgTIAEgnIATAEIgFAlIgFAiIAcgDIACARIhhAKgAgNATIBPgIIAFA0IgOACIgBgEIgzAFIABAEIgOABgAAEAwIAAAFIAzgFIAAgFgAACAfIABAFIAygFIgBgFgAhGg8IAmgEIAKBxIgPACIgBgIIgGAAIABAQIgPABgAg1gtIAHBIIAHAAIgIhJgABqgCIgJACIgJACIgEgRIAMgCIADgGIADgFIgLgJIgMgJIAJgOIACACIAFgNIAFgNIAPAFIgFAQIgHAOIAEACIADACIAEgLIAFgMIAOAGIgFAPIgGAOIALgGIAHAPQAEAIACAJIgQAHIgBgEIAAgEIgDABIgEABIAHA/IgRABgAB2gZIgDAEIAFgBIADAAIgCgEIgBgEIgCAFgAieAbQgFgQgGgMIASgGIAKAcIAHAeIgRAHQgDgRgEgOgACTAkIAfgDIgCgVIgaADIgCgQIBGgHIABAQIgaACIACAVIAfgDIABARIhPAIgAltAdIAxgEIACASIgyAEgAD2AcQAKgDAHgFIAPgJIglADIgCgPIALgBIgHhRIAfgDIgBgPIARgCIABAPIAPgBIgCgPIARgCIABAPIAhgDIAIBQIALgBIACAQIgkADIAHAEIAIADQAJADAJABIgJATIgKgDIgIgEIgLgFIgKgGIAKgLIg0AFIAMAJQgHAHgJAGQgKAHgLAGgAEKgcIACAYIAPgBIgCgYgAEqgfIACAYIAOgCIgCgYgAFIgiIACAYIAQgCIgCgYgAEGhDIACAXIAPgBIgDgYgAElhHIACAYIAPgCIgCgXgAFFhKIACAYIAPgCIgCgXgABXAqIADgTIABgTIAPACIgBAVIgCASgACCAUIgFgPIAOgFQAHAMAEAQIgPAHIgFgPgAlvAIIAxgFIACARIgxAFgAgNAMQgCgDgBgHIgCgRIAFgBIgBgRIgMABIgDgXIAOgCIgCgDIgEgDIAMgJIAFAFIAEAFIgGAEIAOgBIgCgQIAQgBIACAPIAHAAIADgHIADgIIAPADIgDAFIgBAFIAPgCIACAYIgKABIACAUIgCAAIAGALIgDAAIgCABIAMAEIgCAGIgEAFQgFACgQABIgJACIgLABIgSACIgHAAIgBAAQgFAAgDgDgAAbgCIgdACIACACIABAAIAIgBIALgBIAOAAIAGgBIAJgCIABgBIACgDIgZAFgAgEgOIAAAEIAcgEIAXgFgAgBgeIABAEIAqgEIAAgEgAgNgsIAAAEIA+gHIAAgDgAl3gNIA/gGIABASIg/AFgACTgTIgJgOIAGgQIAEgRIAQAEIgEAOIgEAMIAIAMIAHAMIgQAIIgIgPgACtgVIgKgPIAGgPIAFgRIARAFIgFANIgFAMIAIAKIAGALIgOALQgEgIgEgHgADGgYIgLgOQAEgHADgIQAEgIACgJIAQAFIgFANIgFALIAHALIAHALIgOAKQgDgIgFgHgAizggIAlgEIgDgXIARgBIADAWIAlgDIABARIhbAJgAlygjIAwgEIACARIgwAFgACJhTIBKgIIACARIhLAHg");
	mask.setTransform(8.2,-34.2);

	// 圖層 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.231,1],-0.7,-7.7,0.8,7.7).s().p("AmAgnILxhKIAQCaIrxBJg");
	this.shape.setTransform(8.1,-34.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-29.4,-44.9,75.2,21.3), null);


(lib.強 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 強 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjCOIgLgkIATADIAPAAQADAAACgCQACgCABgEQACgDgBgRIgDguIgbACIgBAPIgegCIAChqIAwgEIgEgnIg2AFIgCghIBVgIIAKBpIg1AFIAAAeIA3gFQAFA5AAAgQAAAggEAGQgEAHgIAFQgHAEgLABIgNAAIgQgCgAgfBjIAggEIAggEIgEglIgcACIABAQIgdADIgKhsIA5gGIgBgQIgYAFIgaAEIgLgiIAMgBIAKgCQAGgPAFgPIAIgeIAiAIIgJAYIgJAWIAWgFIAXgGIgHgJIgIgIIAZgVQAOAPANAPQALAQAJARIgbAVIgFgJIgFgJIgPAFIgPAEIACAVIA8gGIAJBdIg8AGIADAjIAPgCIAMgBIgDgIIgEgHIAagRQAJANAGAPQAIAPAHARIgfARIgCgIIgDgIIg9AKIhBAKgAgEgFIADAeIAbgDIgCgdgAA2gKIAEAdIAegDIgDgdg");
	mask.setTransform(20.9,56.8);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],-1.4,-14.5,1.5,14.4).s().p("ArehHIWgiRIAdEgI2gCRg");
	this.shape.setTransform(77.3,51.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.強, new cjs.Rectangle(6.9,42.4,27.9,28.9), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ! (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLBLIAmgEIAEArIgmAEgAgehxIAngEIALCrIgbADg");
	mask.setTransform(141.2,44.6);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B49854","#FEFFCC","#B49854"],[0,0.263,1],-1.4,-14.5,1.5,14.4).s().p("ArehHIWgiRIAdEgI2gCRg");
	this.shape.setTransform(77.3,51.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(138.2,32.9,6.2,23.5), null);


(lib.紅條 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0229").s().p("A+QAlIAAhKMA8hAAAIAABKg");
	this.shape.setTransform(193.7,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.紅條, new cjs.Rectangle(0,0,387.5,7.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 10
	this.instance = new lib.t1_2();
	this.instance.parent = this;
	this.instance.setTransform(10.7,19,1,1,0,0,0,10.7,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// 強
	this.instance_1 = new lib.強();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.9,57.4,5,5,0,0,0,20.7,57.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regY:57.5,scaleX:0.85,scaleY:0.85,x:20.7,y:57.5,alpha:1},4).to({regY:57.6,scaleX:1,scaleY:1,y:57.6},3).wait(72));

	// 勢
	this.instance_2 = new lib.勢();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.3,54.3,5,5,0,0,0,49.3,54.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(68));

	// 回
	this.instance_3 = new lib.回();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.9,52,5,5,0,0,0,81.7,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:81.7,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(64));

	// 歸
	this.instance_4 = new lib.歸();
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.9,48.4,5,5,0,0,0,111.7,48.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:111.7,y:48.6,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(60));

	// !
	this.instance_5 = new lib.Symbol();
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.2,47.2,5,5,0,0,0,141,47);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:141,y:47,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-1.8,149.7,34.8);


(lib.food3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAzHqIg1g6IgHhgIhTADIhNgCIgngYIgkgcIgRltIgKgPIgXjBIiZABQADgkAhgxQAigwBPgNQA8gJArAKQAWAEAFAJQBPASA8htIASASQAOgPAJANIgUBNQBlACA+ANIAJACIABAAIAFABIACABQARAHACAPIAABcIBEAAQBlACBJApQAOAKABAVIgCAAQADBMgVBQIgOBSQgFAWgNAMIgiF3IgwA6IimAQgACqmPgAClmQIAEABIABAAg");
	mask.setTransform(65.2,34.1);

	// 圖層 5
	this.instance = new lib.drink22();
	this.instance.parent = this;
	this.instance.setTransform(20,-17.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 4
	this.instance_1 = new lib.影();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.7,63.7,0.239,0.231,0,19.7,-160.3,88.2,44.9);
	this.instance_1.filters = [new cjs.BlurFilter(20, 10, 1)];
	this.instance_1.cache(7,5,164,91);

	this.instance_2 = new lib.影();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.7,77.7,0.239,0.231,0,19.7,-160.3,88.2,44.9);
	this.instance_2.filters = [new cjs.BlurFilter(20, 10, 1)];
	this.instance_2.cache(7,5,164,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.food3_1, new cjs.Rectangle(19,-16.9,100.7,120), null);


(lib.food3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 圖層 3
	this.instance = new lib.food3_1();
	this.instance.parent = this;
	this.instance.setTransform(77.4,31.4,1,1,0,0,0,77.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,-17.4,99.8,120.5);


(lib.food2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah7FYQiWgMhfghQhogdhhg5QjBhxAkiFQAjhTB2hRQDsijGhAMQEvARC5BjQBdAwAgAuQAyA/gFBTQgJCmkUBiQjbBOjqAAQg9AAg+gGg");
	mask.setTransform(73.8,30.3);

	// 圖層 3
	this.instance = new lib.food5();
	this.instance.parent = this;
	this.instance.setTransform(0,-6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 4
	this.instance_1 = new lib.影();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.9,44.6,0.825,0.78,-18.2,0,0,88.2,44.9);
	this.instance_1.alpha = 0.801;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(7,5,164,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.food2_1, new cjs.Rectangle(-7.6,-14.1,171,129), null);


(lib.food2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 圖層 3
	this.instance = new lib.food2_1();
	this.instance.parent = this;
	this.instance.setTransform(78.3,37,1,1,0,0,0,78.3,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:78.4,scaleX:1.1,scaleY:1.1,x:78.5},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-14.1,171,129);


(lib.food_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiYFcQkYgliviPQhShdANhWQAEgbANgXIAMgSQAog2Bhg7QDCh1EZgWQEZgWDuA7QB4AdA/AiIAmATQAsAZAiAhQBsBogsCHQg4BUhgA7IhWAqQg5AUhNAUQiaAphmAEQhXAFhJAAQh8AAhXgMg");
	mask.setTransform(86,36);

	// 圖層 3
	this.instance = new lib.food4();
	this.instance.parent = this;
	this.instance.setTransform(16,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 影
	this.instance_1 = new lib.影();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.2,52.4,0.898,0.848,-18.2,0,0,88.3,44.9);
	this.instance_1.alpha = 0.801;
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(7,5,164,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.food_1, new cjs.Rectangle(6.4,-10.5,184,138), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// 圖層 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("ANONXQgngCgbgPQg9gggmghQhNhCg2hsQgahCgBgtQAAgOACgLIACgIQAIgYAXgQQAughBKAiQBKAjBDBHQAhAkASAdIALARQAOAWAKAXQAiBMgFBDQgKAmgXAQIgVAKIgOAAIgUgBg");
	var mask_graphics_12 = new cjs.Graphics().p("AMaM1Qh0gThGgaQiKg0hUhlQgmg/AJgwQADgPAHgMIAHgJQAVgaAzgXQBkgtCNASQCOATB1A8QA7AeAeAaIATAPQAWAUAQAWQAyBIgaBIQgeAqgyAXIgsAPQgdAEgnADQghADgcAAQgnAAgegFg");
	var mask_graphics_13 = new cjs.Graphics().p("AMnMgQirgHhlgTQjJglhxhfQgyg8ATgyQAGgPAMgNIALgKQAjgeBOgdQCbg6DQADQDRADCpAwQBUAZAqAXIAaANQAeASAWAVQBDBEgvBNQgyAvhNAdIhDAUQgsAIg7AHQhhANhFAAIgbAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AHNMCQkHgXiPhYQg8g5Abg0QAJgRARgOIAPgLQAyghBpgjQDRhHEUgMQEUgNDcAlQBuASA2AVIAiALQAmAQAbAUQBUBAhEBSQhGAzhoAkIhbAZQg7AMhOALQidAZhjACQhNAChCAAQiAAAhYgHg");
	var mask_graphics_57 = new cjs.Graphics().p("ANONXQgngCgbgPQg9gggmghQhNhCg2hsQgahCgBgtQAAgOACgLIACgIQAIgYAXgQQAughBKAiQBKAjBDBHQAhAkASAdIALARQAOAWAKAXQAiBMgFBDQgKAmgXAQIgVAKIgOAAIgUgBg");
	var mask_graphics_58 = new cjs.Graphics().p("AMaM1Qh0gThGgaQiKg0hUhlQgmg/AJgwQADgPAHgMIAHgJQAVgaAzgXQBkgtCNASQCOATB1A8QA7AeAeAaIATAPQAWAUAQAWQAyBIgaBIQgeAqgyAXIgsAPQgdAEgnADQghADgcAAQgnAAgegFg");
	var mask_graphics_59 = new cjs.Graphics().p("AMnMgQirgHhlgTQjJglhxhfQgyg8ATgyQAGgPAMgNIALgKQAjgeBOgdQCbg6DQADQDRADCpAwQBUAZAqAXIAaANQAeASAWAVQBDBEgvBNQgyAvhNAdIhDAUQgsAIg7AHQhhANhFAAIgbAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AHNMCQkHgXiPhYQg8g5Abg0QAJgRARgOIAPgLQAyghBpgjQDRhHEUgMQEUgNDcAlQBuASA2AVIAiALQAmAQAbAUQBUBAhEBSQhGAzhoAkIhbAZQg7AMhOALQidAZhjACQhNAChCAAQiAAAhYgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:93.5,y:85.6}).wait(1).to({graphics:mask_graphics_12,x:112.5,y:82.6}).wait(1).to({graphics:mask_graphics_13,x:131.7,y:80}).wait(1).to({graphics:mask_graphics_14,x:150.8,y:77.7}).wait(43).to({graphics:mask_graphics_57,x:93.5,y:85.6}).wait(1).to({graphics:mask_graphics_58,x:112.5,y:82.6}).wait(1).to({graphics:mask_graphics_59,x:131.7,y:80}).wait(1).to({graphics:mask_graphics_60,x:150.8,y:77.7}).wait(1));

	// 圖層 2
	this.instance = new lib.底線();
	this.instance.parent = this;
	this.instance.setTransform(234.3,138.5,0.83,0.83,-4.4,0,0,48.5,7.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(50));

	// 圖層 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_8 = new cjs.Graphics().p("ANONwQgngCgbgPQg9gggmghQhNhCg2hsQgahCgBgtQAAgOACgLIACgIQAIgYAXgQQAughBKAiQBKAjBDBHQAhAkASAdIALARQAOAWAKAXQAiBMgFBDQgKAmgXAQIgVAKIgOAAIgUgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AMbNOQh1gThFgaQiLg0hUhlQgmg/AJgwQADgPAHgMIAHgJQAWgaAygXQBkgtCNASQCOATB1A8QA7AeAfAaIASAPQAWAUAQAWQAzBIgaBIQgfAqgyAXIgsAPQgdAEgnADQghADgcAAQgnAAgdgFg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AMoM5QisgHhkgTQjKglhxhfQgyg7ATgzQAGgPAMgNIALgKQAkgeBNgdQCbg6DRADQDRADCoAxQBVAYAqAXIAaANQAeASAVAVQBEBEgvBNQgyAvhNAdIhEAUQgsAIg6AIQhiAMhEAAIgbAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AHNMbQkHgXiPhYQg8g5Abg0QAJgRARgOIAPgLQAyghBpgjQDRhHEUgMQEUgNDcAlQBuASA2AVIAiALQAmAQAbAUQBUBAhEBSQhGAzhoAkIhbAZQg7AMhOALQidAZhjACQhNAChCAAQiAAAhYgHg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ANONwQgngCgbgPQg9gggmghQhNhCg2hsQgahCgBgtQAAgOACgLIACgIQAIgYAXgQQAughBKAiQBKAjBDBHQAhAkASAdIALARQAOAWAKAXQAiBMgFBDQgKAmgXAQIgVAKIgOAAIgUgBg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AMbNOQh1gThFgaQiLg0hUhlQgmg/AJgwQADgPAHgMIAHgJQAWgaAygXQBkgtCNASQCOATB1A8QA7AeAfAaIASAPQAWAUAQAWQAzBIgaBIQgfAqgyAXIgsAPQgdAEgnADQghADgcAAQgnAAgdgFg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AMoM5QisgHhkgTQjKglhxhfQgyg7ATgzQAGgPAMgNIALgKQAkgeBNgdQCbg6DRADQDRADCoAxQBVAYAqAXIAaANQAeASAVAVQBEBEgvBNQgyAvhNAdIhEAUQgsAIg6AIQhiAMhEAAIgbAAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AHNMbQkHgXiPhYQg8g5Abg0QAJgRARgOIAPgLQAyghBpgjQDRhHEUgMQEUgNDcAlQBuASA2AVIAiALQAmAQAbAUQBUBAhEBSQhGAzhoAkIhbAZQg7AMhOALQidAZhjACQhNAChCAAQiAAAhYgHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_8,x:93.5,y:88.1}).wait(1).to({graphics:mask_1_graphics_9,x:112.5,y:85.1}).wait(1).to({graphics:mask_1_graphics_10,x:131.7,y:82.5}).wait(1).to({graphics:mask_1_graphics_11,x:150.8,y:80.2}).wait(43).to({graphics:mask_1_graphics_54,x:93.5,y:88.1}).wait(1).to({graphics:mask_1_graphics_55,x:112.5,y:85.1}).wait(1).to({graphics:mask_1_graphics_56,x:131.7,y:82.5}).wait(1).to({graphics:mask_1_graphics_57,x:150.8,y:80.2}).wait(4));

	// 圖層 3
	this.instance_1 = new lib.底線();
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.5,134.3,1,1,0,0,0,48.6,7.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(53));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224.6,119.2,1,1,0,0,0,0.1,-30.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.1,97.1,95,40);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 黑
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.671)","rgba(0,0,0,0.898)","#000000"],[0,0.38,0.573,0.878],0,0,0,0,0,195.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(271.9,273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 紅條
	this.instance = new lib.紅條();
	this.instance.parent = this;
	this.instance.setTransform(179.2,367.3,1,1,45,0,0,193.7,3.8);

	this.instance_1 = new lib.紅條();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.3,377.2,1,1,45,0,0,193.7,3.8);

	this.instance_2 = new lib.紅條();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.4,387.1,1,1,45,0,0,193.7,3.8);

	this.instance_3 = new lib.紅條();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.5,397,1,1,45,0,0,193.7,3.8);

	this.instance_4 = new lib.紅條();
	this.instance_4.parent = this;
	this.instance_4.setTransform(139.6,406.9,1,1,45,0,0,193.7,3.8);

	this.instance_5 = new lib.紅條();
	this.instance_5.parent = this;
	this.instance_5.setTransform(406.9,139.6,1,1,45,0,0,193.7,3.7);

	this.instance_6 = new lib.紅條();
	this.instance_6.parent = this;
	this.instance_6.setTransform(397,149.5,1,1,45,0,0,193.7,3.7);

	this.instance_7 = new lib.紅條();
	this.instance_7.parent = this;
	this.instance_7.setTransform(387.1,159.4,1,1,45,0,0,193.7,3.7);

	this.instance_8 = new lib.紅條();
	this.instance_8.parent = this;
	this.instance_8.setTransform(377.2,169.5,1,1,45,0,0,193.8,3.8);

	this.instance_9 = new lib.紅條();
	this.instance_9.parent = this;
	this.instance_9.setTransform(367.3,179.4,1,1,45,0,0,193.8,3.8);

	this.instance_10 = new lib.紅條();
	this.instance_10.parent = this;
	this.instance_10.setTransform(357.4,189.3,1,1,45,0,0,193.8,3.8);

	this.instance_11 = new lib.紅條();
	this.instance_11.parent = this;
	this.instance_11.setTransform(347.5,199.2,1,1,45,0,0,193.8,3.8);

	this.instance_12 = new lib.紅條();
	this.instance_12.parent = this;
	this.instance_12.setTransform(258.4,288.2,1,1,45,0,0,193.7,3.8);

	this.instance_13 = new lib.紅條();
	this.instance_13.parent = this;
	this.instance_13.setTransform(248.5,298.1,1,1,45,0,0,193.7,3.8);

	this.instance_14 = new lib.紅條();
	this.instance_14.parent = this;
	this.instance_14.setTransform(238.6,308,1,1,45,0,0,193.7,3.8);

	this.instance_15 = new lib.紅條();
	this.instance_15.parent = this;
	this.instance_15.setTransform(228.7,317.8,1,1,45,0,0,193.7,3.8);

	this.instance_16 = new lib.紅條();
	this.instance_16.parent = this;
	this.instance_16.setTransform(218.8,327.7,1,1,45,0,0,193.7,3.8);

	this.instance_17 = new lib.紅條();
	this.instance_17.parent = this;
	this.instance_17.setTransform(208.9,337.6,1,1,45,0,0,193.7,3.8);

	this.instance_18 = new lib.紅條();
	this.instance_18.parent = this;
	this.instance_18.setTransform(199,347.5,1,1,45,0,0,193.7,3.8);

	this.instance_19 = new lib.紅條();
	this.instance_19.parent = this;
	this.instance_19.setTransform(189.1,357.4,1,1,45,0,0,193.7,3.8);

	this.instance_20 = new lib.紅條();
	this.instance_20.parent = this;
	this.instance_20.setTransform(337.6,209.1,1,1,45,0,0,193.8,3.8);

	this.instance_21 = new lib.紅條();
	this.instance_21.parent = this;
	this.instance_21.setTransform(327.7,219,1,1,45,0,0,193.8,3.8);

	this.instance_22 = new lib.紅條();
	this.instance_22.parent = this;
	this.instance_22.setTransform(317.8,228.9,1,1,45,0,0,193.8,3.8);

	this.instance_23 = new lib.紅條();
	this.instance_23.parent = this;
	this.instance_23.setTransform(307.9,238.8,1,1,45,0,0,193.8,3.8);

	this.instance_24 = new lib.紅條();
	this.instance_24.parent = this;
	this.instance_24.setTransform(298,248.7,1,1,45,0,0,193.8,3.8);

	this.instance_25 = new lib.紅條();
	this.instance_25.parent = this;
	this.instance_25.setTransform(288.1,258.6,1,1,45,0,0,193.8,3.8);

	this.instance_26 = new lib.紅條();
	this.instance_26.parent = this;
	this.instance_26.setTransform(278.2,268.5,1,1,45,0,0,193.8,3.8);

	this.instance_27 = new lib.紅條();
	this.instance_27.parent = this;
	this.instance_27.setTransform(268.3,278.3,1,1,45,0,0,193.7,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,546.5,546.5), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 圖層 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(77.2,35.8,1,1,0,0,0,80.9,35.4);
	this.instance.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:35.3,scaleX:1.07,scaleY:1.07,y:35.7},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-17.4,188,73);


(lib.food1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// 圖層 4
	this.instance = new lib.food_1();
	this.instance.parent = this;
	this.instance.setTransform(90.6,47,1,1,0,0,0,90.6,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:90.5,scaleX:1.1,scaleY:1.1,x:90.5},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,-10.5,184,138);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_199 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(1));

	// food3
	this.instance = new lib.food3();
	this.instance.parent = this;
	this.instance.setTransform(221,65.3,0.539,0.539,0,0,0,74.9,47.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).wait(1).to({regX:64,regY:40.9,scaleX:0.56,scaleY:0.56,x:211.8,y:60,alpha:0.036},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:198.2,y:53.6,alpha:0.183},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:169,y:39.5,alpha:0.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:139.8,y:25.4,alpha:0.817},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:126.2,y:18.9,alpha:0.964},0).wait(1).to({regX:75,regY:47.4,scaleX:1,scaleY:1,x:133.8,y:23.9,alpha:1},0).wait(52));

	// food2
	this.instance_1 = new lib.food2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.4,75.8,0.395,0.395,0,0,0,77,37.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:75.6,regY:50.1,scaleX:0.42,scaleY:0.42,x:134.6,y:78.8,alpha:0.036},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:133.9,y:70.6,alpha:0.183},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:132.2,y:53,alpha:0.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:130.5,y:35.4,alpha:0.817},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:129.8,y:27.2,alpha:0.964},0).wait(1).to({regX:77,regY:37.5,scaleX:1,scaleY:1,x:131,y:12.5,alpha:1},0).wait(22).to({y:18.5},2).to({y:-7.5,alpha:0},3).to({_off:true},1).wait(78));

	// food1
	this.instance_2 = new lib.food1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.7,65.5,0.424,0.424,0,0,0,89,45.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).wait(1).to({regX:96.8,regY:58.1,scaleX:0.44,scaleY:0.44,x:63.3,y:69.3,alpha:0.033},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:72.3,y:63.3,alpha:0.166},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:92.5,y:50.1,alpha:0.459},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:115.3,y:35,alpha:0.794},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:126.7,y:27.6,alpha:0.959},0).wait(1).to({regX:89,regY:45.5,scaleX:1,scaleY:1,x:121.7,y:13.2,alpha:1},0).wait(21).to({y:19.7},2).to({y:-19.3,alpha:0},3).to({_off:true},1).wait(124));

	// 手
	this.instance_3 = new lib.hand_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-31.5,11,1,1,0,0,0,8.5,11);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({x:-30.9,y:11.5},0).wait(1).to({x:-29.2,y:13.2},0).wait(1).to({x:-25.9,y:16.5},0).wait(1).to({x:-20.4,y:22},0).wait(1).to({x:-11.9,y:30.4},0).wait(1).to({x:0.8,y:42.9},0).wait(1).to({x:18.3,y:60.4},0).wait(1).to({x:38.2,y:80},0).wait(1).to({x:54.3,y:96},0).wait(1).to({x:64.7,y:106.3},0).wait(1).to({x:70.7,y:112.2},0).wait(1).to({x:73.6,y:115.1},0).wait(1).to({x:74.5,y:116},0).to({x:64,y:105.5},7).to({x:57,y:130},6).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).wait(26).to({x:58.6,y:129},0).wait(1).to({x:64.2,y:125.7},0).wait(1).to({x:75,y:119.2},0).wait(1).to({x:91.1,y:109.8},0).wait(1).to({x:108.2,y:99.6},0).wait(1).to({x:120.9,y:92.1},0).wait(1).to({x:127.7,y:88.1},0).wait(1).to({x:129.6,y:87},0).wait(7).to({y:106.5},5).to({scaleX:0.77,scaleY:0.77},2).to({scaleX:1,scaleY:1},2).wait(23).to({x:132,y:106.8},0).wait(1).to({x:140.1,y:108},0).wait(1).to({x:154.6,y:110},0).wait(1).to({x:174.2,y:112.8},0).wait(1).to({x:194.2,y:115.7},0).wait(1).to({x:209.4,y:117.9},0).wait(1).to({x:218,y:119.1},0).wait(1).to({x:220.6,y:119.5},0).wait(7).to({x:212.2,y:87.6},9).to({scaleX:0.77,scaleY:0.77},2).to({scaleX:1,scaleY:1},2).wait(58));

	// pic2.png
	this.instance_4 = new lib.pic2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.8,86.2,0.941,1,0,-14.2,165.8,103.3,71.1);
	this.instance_4.filters = [new cjs.ColorFilter(0.26, 0.26, 0.26, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-2,0,107,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:103.5,regY:71.5,scaleX:0.12,skewX:-7.5,skewY:183.3,x:96.1,y:84.7},5).to({regX:104,regY:71.7,scaleX:0.22,skewX:-5.8,skewY:277.5,x:96.9,y:83.7},3).to({regX:104.2,scaleX:0.74,skewX:-1.8,skewY:332.6,x:102.7,y:79.8},2).to({regX:103.4,regY:71,scaleX:1,skewX:0,skewY:360,x:105.5,y:84.7},3).wait(187));

	// pic3.png
	this.instance_5 = new lib.pic3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.8,70.9,1,1,0,0,0,53.5,67);
	this.instance_5.filters = [new cjs.ColorFilter(0.26, 0.26, 0.26, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-1,-1,105,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200));

	// pic4.png
	this.instance_6 = new lib.pic4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(187.9,62.9,0.954,0.941,0,-12.5,167,0.5,74);
	this.instance_6.filters = [new cjs.ColorFilter(0.26, 0.26, 0.26, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-2,-1,105,151);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({regX:0.6,regY:73.8,scaleX:0.2,scaleY:0.9,skewX:-6.8,skewY:131.1,x:180,y:60},4).to({regX:0.4,regY:74,scaleX:1,scaleY:1,skewX:0,skewY:0,x:174.3,y:68},7).wait(184));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,-6.6,134.9,160.7);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(236,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0129").s().p("AEHB4IjvjvIBjAAIC7C6IAAA1gABKB4IjvjvIBjAAIDvDvgAhzB4Ii/i+IgDgCIAAgvIA0AAIDwDvgAk1B4IAAhgIADADIBdBdgADgh3IBWAAIAABWg");
	this.shape.setTransform(261,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACsB4IjwjvIBaAAIDwDvgAgSB4IjwjvIBbAAIDwDvgAjWB4IhehdIAAhhIC/C+gAB5h3IBlAAIBXBWIAABkg");
	this.shape_1.setTransform(261.1,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(300));

	// btn
	this.instance_1 = new lib.btn_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(204.6,129.9,1,1,-3.2,0,0,234.3,124.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(226).to({_off:false},0).wait(1).to({regX:235.5,regY:124.6,x:206.6,y:129.7,alpha:0.028},0).wait(1).to({rotation:-2.8,x:209.7,y:129.2,alpha:0.13},0).wait(1).to({rotation:-2.1,x:216.1,y:127.9,alpha:0.341},0).wait(1).to({rotation:-1.2,x:224.9,y:126.3,alpha:0.633},0).wait(1).to({rotation:-0.5,x:231.7,y:125.1,alpha:0.859},0).wait(1).to({rotation:-0.1,x:235,y:124.5,alpha:0.97},0).wait(1).to({regX:234.7,regY:124.3,rotation:0,x:234.7,y:124.3,alpha:1},0).wait(63).to({alpha:0},3).wait(1));

	// dishes_center
	this.instance_2 = new lib.food_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.1,210.2,0.8,0.8,0,0,0,88.8,49);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({_off:false},0).to({y:204.2,alpha:1},5).wait(82).to({alpha:0},3).wait(1));

	// dishes_right
	this.instance_3 = new lib.food3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.5,161.3,0.634,0.634,0,0,0,74.8,47.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({y:155.3,alpha:1},5).wait(77).to({alpha:0},3).wait(1));

	// dishes_left
	this.instance_4 = new lib.food2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.4,177.4,0.58,0.58,0,0,0,76.5,50.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(212).to({_off:false},0).to({regX:76.7,x:57.5,y:170.4,alpha:1},5).wait(79).to({alpha:0},3).wait(1));

	// t6
	this.instance_5 = new lib.t6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.4,122,1,1,0,0,0,80.9,35.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({y:115.5,alpha:1},5).wait(70).to({alpha:0},3).wait(1));

	// t5
	this.instance_6 = new lib.t5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(200.4,122,1,1,0,0,0,80.9,35.4);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).wait(1).to({regX:0,regY:-29.7,x:119.5,y:56.6,alpha:0.053},0).wait(1).to({y:55.2,alpha:0.258},0).wait(1).to({y:52.8,alpha:0.638},0).wait(1).to({y:50.9,alpha:0.924},0).wait(1).to({regX:80.9,regY:35.4,x:200.4,y:115.5,alpha:1},0).wait(72).to({alpha:0},3).wait(1));

	// t4
	this.instance_7 = new lib.t4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.4,54.4,1,1,0,0,0,30.9,-25.7);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},4).wait(39).to({alpha:0},8).wait(86));

	// t3
	this.instance_8 = new lib.t3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(200.4,115.5,1,1,0,0,0,80.9,35.4);
	this.instance_8.alpha = 0;
	this.instance_8.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({alpha:1},4).wait(35).to({regX:30.2,regY:-26.6,x:148.6,y:53.5},0).wait(1).to({x:144.7},0).wait(1).to({x:138.6},0).wait(1).to({x:134.1},0).wait(1).to({regX:80.9,regY:35.4,x:183.5,y:115.5},0).wait(1).to({_off:true},4).wait(133));

	// t2
	this.instance_9 = new lib.t2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(200.4,122,1,1,0,0,0,80.9,35.4);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(44,43,43,1)",0,0,6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).wait(1).to({regX:30.6,regY:-26.6,x:150.1,y:59.6,alpha:0.067},0).wait(1).to({y:57.9,alpha:0.322},0).wait(1).to({y:55.4,alpha:0.707},0).wait(1).to({y:53.9,alpha:0.939},0).wait(1).to({regX:80.9,regY:35.4,x:200.4,y:115.5,alpha:1},0).wait(39).to({regX:30.6,regY:-26.6,x:148.9,y:53.5},0).wait(1).to({x:144.2},0).wait(1).to({x:136.9},0).wait(1).to({x:132.1},0).wait(1).to({regX:80.9,regY:35.4,x:180.9,y:115.5},0).wait(1).to({_off:true},4).wait(177));

	// menu
	this.instance_10 = new lib.menu();
	this.instance_10.parent = this;
	this.instance_10.setTransform(166,320.6,1,1,0,0,0,145,75);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},0).wait(1).to({regX:117.4,regY:49.4,x:138.4,y:294.4,alpha:0.004},0).wait(1).to({y:292.6,alpha:0.018},0).wait(1).to({y:289.4,alpha:0.043},0).wait(1).to({y:284.5,alpha:0.079},0).wait(1).to({y:277.8,alpha:0.13},0).wait(1).to({y:269.1,alpha:0.195},0).wait(1).to({y:258.4,alpha:0.276},0).wait(1).to({y:245.9,alpha:0.371},0).wait(1).to({y:232,alpha:0.475},0).wait(1).to({y:217.9,alpha:0.582},0).wait(1).to({y:204.3,alpha:0.684},0).wait(1).to({y:192.4,alpha:0.774},0).wait(1).to({y:182.4,alpha:0.849},0).wait(1).to({y:174.6,alpha:0.908},0).wait(1).to({y:169,alpha:0.95},0).wait(1).to({y:165.2,alpha:0.979},0).wait(1).to({y:163.1,alpha:0.995},0).wait(1).to({regX:145,regY:75,x:166,y:188,alpha:1},0).wait(145).to({alpha:0},8).to({_off:true},1).wait(85));

	// t1
	this.instance_11 = new lib.t1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(103.4,122.4,1,1,0,0,0,72.8,35.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(1).to({regX:57.3,regY:50.4,x:89.1,y:136.7,alpha:0.014},0).wait(1).to({x:93.7,y:136.2,alpha:0.063},0).wait(1).to({x:103.4,y:135.2,alpha:0.168},0).wait(1).to({x:120.8,y:133.3,alpha:0.356},0).wait(1).to({x:144.2,y:130.8,alpha:0.608},0).wait(1).to({x:163.2,y:128.7,alpha:0.813},0).wait(1).to({x:174,y:127.5,alpha:0.93},0).wait(1).to({x:179.1,y:127,alpha:0.985},0).wait(1).to({regX:72.8,regY:35.9,x:196,y:112.4,alpha:1},0).wait(29).to({y:118.9},2).to({y:60.4,alpha:0},3).to({_off:true},1).wait(251));

	// pic1
	this.instance_12 = new lib.pic1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-74.5,190.6,1,1,-9.7,0,0,87.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:118.7,rotation:-9.6,x:-73.3,y:191.5},0).wait(1).to({rotation:-9.4,x:-69.7,y:190.2},0).wait(1).to({rotation:-9,x:-62.5,y:187.8},0).wait(1).to({rotation:-8.2,x:-50,y:183.4},0).wait(1).to({rotation:-6.8,x:-29,y:176.2},0).wait(1).to({rotation:-4.9,x:1.6,y:165.6},0).wait(1).to({rotation:-2.9,x:32.8,y:154.8},0).wait(1).to({rotation:-1.6,x:54.4,y:147.3},0).wait(1).to({rotation:-0.8,x:67.5,y:142.8},0).wait(1).to({rotation:-0.3,x:74.8,y:140.3},0).wait(1).to({rotation:-0.1,x:78.5,y:139},0).wait(1).to({regY:117.5,rotation:0,x:79.5,y:137.5},0).wait(36).to({regY:118.7,y:145.3},0).wait(1).to({y:170.9},0).wait(1).to({y:228},0).wait(1).to({y:307.8},0).wait(1).to({y:354.5},0).wait(1).to({regY:117.5,y:364.9},0).to({_off:true},197).wait(50));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(151.4,125.3,1,1,0,0,0,273.3,273.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.3,-148,607,546.5);


// stage content:
(lib._300x250_friday2013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 線框
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,2,1).p("AXaTgMguzAAAMAAAgm/MAuzAAAg");
	this.shape.setTransform(150.3,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(23,29.5,1,1,0,0,0,23,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-23.1,607,546.5);
// library properties:
lib.properties = {
	id: 'A7B510CF2689D84A950978AC9204AC92',
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_friday_2013_atlas_.png", id:"300x250_friday_2013_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7B510CF2689D84A950978AC9204AC92'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;