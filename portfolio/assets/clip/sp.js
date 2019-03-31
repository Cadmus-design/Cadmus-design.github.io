(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sp_atlas_", frames: [[264,252,100,250],[302,115,60,60],[354,44,35,54],[364,100,10,25],[354,0,52,42],[376,100,10,24],[302,0,50,113],[364,127,10,24],[358,177,52,55],[0,252,262,250],[0,0,300,250],[376,126,9,24],[302,177,54,55]]}
];


// symbols:



(lib.bg_3 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.card_0 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.club01 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.club = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.diamond01 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.diamond = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.giftjpgcopy = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.heart = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.heart_2 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.man_1_300x250 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.man_2_300x250 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.spade = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.spade_1 = function() {
	this.spriteSheet = ss["sp_atlas_"];
	this.gotoAndStop(12);
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


(lib.lightbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgngnIBjuYIgUOiIhjPdg");
	this.shape.setTransform(6,96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightbar, new cjs.Rectangle(0,0,12,192), null);


(lib.lightspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.6)","rgba(255,255,255,0.102)"],[0,0.643,1],0,0,0,0,0,9.6).s().p("AhDBDQgbgcAAgnQAAgmAbgcQAcgcAnAAQAoAAAbAcQAcAcAAAmQAAAngcAcQgbAcgoAAQgnAAgcgcg");
	this.shape.setTransform(14.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.6)","rgba(255,255,255,0.102)"],[0,0.643,1],0,0,0,0,0,9.6).s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape_1.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightspot, new cjs.Rectangle(0,0,24,19), null);


(lib.sp_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJAoIAFABIADAAIAGgBIAEgCQABgCABgGIACgRIhDAAIgHAKIgIAIIgIgGQAKgLAJgNQAHgLAFgPIgaAAIAAgJIALAAIgCgFIgCgGIAKgBIACAGIADAGIAHAAIACgIIABgHIAKACIgCAHIgCAGIArAAIgBAKIgBAJIAKAAIgBALIgCAIIAJAAQgBATgCAKQgBALgDACQgBADgHABIgPABgAAkAAIgCAEIA0AAIABgEIABgGIgxAAIgDAGgAArgPIAkAAIABgEIAAgGIgiAAIgDAKgAhpApQAJgCAGgDQAGgDADgEQACgDACgFQACgFAAgGIgdAAIAAgKIBkAAIAAAKIgjAAIAAAZIABADIACABIAQAAIACgBIABgBIABgEIAAgKIALADQAAAIgCAFQgBAFgBABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgGACIgUAAIgFgBIgDgCIgDgDIAAgFIAAgcIgOAAQgBAIgCAHQgCAHgEAEQgEAFgGADQgHAEgJADgAjXArQAJgIAFgIIADgFIADgLIgRAAIAAgHIAIgHIAIgKIgSAAIAAgJIAeAAIAAAGIgGAKIgJAIIAPAAIAAAHIgDAJIgCAHQAFAHAEACIAEABIAGABQAIABAYAAIAOAAIAKAAIgBAKIgkAAIgTgBIgIgBIgGgCIgFgDIgFgGIgGAIIgHAJgAAQAsQAEgGACgGQADgGACgHIAJADIgFAOIgHANgAAqAhIgBgLIAIgCIADAMIABAPIgKACIgBgQgAByAuIAAgKIARAAIAAhDIAMAAIAABDIAWAAIAAhVIAMAAIAAAgIAiAAIAAAKIgiAAIAAArIAmAAIAAAKgAA7AfIgDgLIAIgCIAEAKIAEAMIgKACIgDgLgABMAbIgEgJIAIgBIAEAIIADAIIgIADIgDgJgAiJAUIgMgJIgBADIgCACQgDAFgGAFQgGAEgIADIgGgJQAIgDAFgEQAFgDADgFIADgFIACgFIgaAAIAAgJIAbAAIAAgCIAAgDIAAgIIgYAAIAAgJIANAAIgEgGIgDgHIAJgEIAEAIIAFAJIAKAAIADgIIAFgJIAKAEIgDAHIgFAGIAPAAIAAAJIgZAAIAAAIIAAADIAAACIAcAAIAAAJIgdAAIAAABIgBACIAPALIAPALIgGAJIgPgNgAgSgKIAAgTIhJAAIAAATIgLAAIAAgdIAqAAIgCgFIgCgDIALgCIACAEIACAGIApAAIAAAdgAhWgKIAAgJIA9AAIAAAJgAjHgiIgIgIIAHgGIAHAHIAGAHIgHAHIgFgHg");
	this.shape.setTransform(88.3,45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(55.7,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sp_mc, new cjs.Rectangle(2.6,2.6,107.2,48.1), null);


(lib.man_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(179.6,179.1);

	// JPG
	this.instance = new lib.man_2_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-1,1.2,1.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_2_mc, new cjs.Rectangle(-0.4,-1,360,358), null);


(lib.man_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(157.4,184.8);

	// JPG
	this.instance = new lib.man_1_300x250();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-0.7,1.19,1.19);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1_mc, new cjs.Rectangle(0,-0.9,312.4,376), null);


(lib.hint_clip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(59.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hint_clip, new cjs.Rectangle(0,0,119.1,8.4), null);


(lib.gift_shine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjHIQg9gKgogKQgMgHAajEQAFgoAKgvQAJguAHgUQAKgdAShAQAXhQAFgjQAFgegHguQgIg1AAgTQABgeARgSQAIgJAIgDIBJACQAKAAADgWIAEgoQACgPAGgGIANgIQAFgDAAgUQAAgTAFgBQAGgCAUACIAGABIgXBPIAJBSQABABAqAXIArAWQAfgdAFgKQgHgEgJgCQgXgDgLgEQALAEAXADQAJACAHAEQgFAKgfAdIgrgWQgqgXgBgBIgJhSIAXhPIALABQALADgBAIIgDAiIAJAHQAJAIAAAEQABAHgCAzIAGAGQAGAHAAALQA7ALADAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAGAGIALAUQAEAJgIApIgMBBQgCAUAEAjQAEAigCAJQgCAMgLAEQgKADAAAFIABB4QALBHgQCTQgLBfgLA2QgCANgJAEIgJABIgsABQhRAAhggOg");
	mask.setTransform(20.5,47);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-100.7,0,100.8,0).s().p("AjoOdI4N85IfeAAIYNc5g");
	this.shape.setTransform(-98.1,145.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-86.8,0,86.9,0).s().p("AjIOdI0485IbIAAIU5c5g");
	this.shape_1.setTransform(-67.8,115.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-75.1,0,75.2,0).s().p("AitOdIyE85IXeAAISFc5g");
	this.shape_2.setTransform(-42.1,90.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-65.5,0,65.6,0).s().p("AiWOdIvw85IUdAAIPwc5g");
	this.shape_3.setTransform(-21,70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-58,0,58.1,0).s().p("AiGOdIt985ISJAAIN9c5g");
	this.shape_4.setTransform(-4.7,54.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-52.7,0,52.8,0).s().p("Ah5OdIsr85IQeAAIMrc5g");
	this.shape_5.setTransform(7,42.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-49.5,0,49.5,0).s().p("AhyOdIr585IPdAAIL6c5g");
	this.shape_6.setTransform(14,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-48.4,0,48.5,0).s().p("AhvOdIrq85IPJAAILqc5g");
	this.shape_7.setTransform(16.3,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-57.2,0,57.2,0).s().p("AiDOdItw85IR3AAINwc5g");
	this.shape_8.setTransform(41.1,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-65.9,0,65.9,0).s().p("AiXOdIv285IUlAAIP2c5g");
	this.shape_9.setTransform(65.8,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-74.6,0,74.6,0).s().p("AirOdIx885IXTAAIR8c5g");
	this.shape_10.setTransform(90.6,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-83.3,0,83.4,0).s().p("AjAOdI0B85IaBAAIUCc5g");
	this.shape_11.setTransform(115.3,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-92,0,92.1,0).s().p("AjUOdI2H85IcvAAIWJc5g");
	this.shape_12.setTransform(140.1,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)","rgba(255,255,255,0)"],[0,0.486,1],-100.7,0,100.8,0).s().p("AjnOdI4O85IfdAAIYPc5g");
	this.shape_13.setTransform(164.8,3.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,53.1,40.9,41);


(lib.finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhDBUQhyhagBgbIBKgwQBSgyAggQQAxgXAgABQApABgKAqIAEAIQAFAIAKgEQAOgGAVAWQAVAXgTATQgRARgJAEIgFAAIAPANQAPAQAEAOQAEAOgJASIgNAXQgEALhuBhQg4gpg4gug");
	mask.setTransform(117.5,220.1);

	// JPG
	this.instance = new lib.man_1_300x250();
	this.instance.parent = this;
	this.instance.setTransform(0,0.3,1.19,1.19);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finger_mc, new cjs.Rectangle(0,-0.9,312.4,376), null);


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.club01();
	this.instance.parent = this;
	this.instance.setTransform(21.8,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.instance_1 = new lib.club();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,103.5,1,1,180);

	this.instance_2 = new lib.club();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlTIOQgfAAAAgeIAAveQAAgfAfAAIKnAAQAfAAAAAfIAAPeQAAAegfAAg");
	this.shape_1.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_4_mc, new cjs.Rectangle(-24.1,-17.9,118.5,132.5), null);


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.diamond01();
	this.instance.parent = this;
	this.instance.setTransform(12.6,30.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 5
	this.instance_1 = new lib.diamond();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,103.5,1,1,180);

	this.instance_2 = new lib.diamond();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlTIOQgfAAAAgeIAAveQAAgfAfAAIKnAAQAfAAAAAfIAAPeQAAAegfAAg");
	this.shape_1.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai1A8IAAgIIgiAAIAAAIIgLAAIAAhbIASAAIAAgNIgUAAIAAgKIA+AAIAAAKIgTAAIAAANIAQAAIAABbgAjXAqIAiAAIAAgMIgiAAgAjXAUIAiAAIAAgMIgDAAIgFgBIgDgBIgBgDIgBgEIAAgTIgGAAIAAAKIgBAIIgDAHIgFAJIgGgGgAjXAGIADgGIACgFIABgGIABgJIgHAAgAi5gFIABADIABABIACAAIAAgTIgEAAgAjIgfIAGAAIAAgNIgGAAgABvA3IADgPIACgPIAKABIgCASIgDAOgAAOA6IAAgnIgnAAIAAgMIAnAAIAAgdIgVAAIgFAHIgGAHIgJgIQAJgKAFgJIAEgKIAEgNIAKAFIgEALIgCAJIAPAAIAAgZIANAAIAAAZIAcAAIAAALIgcAAIAAAdIAgAAIAAAMIggAAIAAAngAgrA6IAAhDIgNAOIgDgNIAIgLIAGgLIAGgMIAHgRIAKAFIgFAOIgFAMIAABWgAiUA5QgGAAgDgDIgCgEIgBgFIAAg7IAhAAIAAgbIgjAAIAAgMIAvAAIAAAzIghAAIAAAsIABADIADABIARAAIACgBIACgCIABgHIAAgRIAMAEIgCAUIgDAJIgEAEIgHABgACeA3IAAgKIAJAAIAAhhIA1AAIAABhIAJAAIAAAKgACyAtIAfAAIAAgXIgfAAgACyAMIAfAAIAAgWIgfAAgACygUIAfAAIAAgWIgfAAgACDAZIAIgBIACANIACAQIgKABQAAgSgCgLgACVAiIgDgKIAIgCIADAKIAEALIgKACIgCgLgABvAJIADAAIAFAAIAIgKIAJgOIgMACIgMADIgCgLIADAAIAFgBIAIgRIAIgUIALAEIgIARIgIAPIAGgCIAGgBIAFgIIAEgJIALAEIgPAbIgPAUIAJgBIAJgCIgEgNIAJgCIAEAMIAEAPIgKADIgBgDIAAgCIgQADIgWACg");
	this.shape_2.setTransform(39.6,66.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6BWQAHgQADgVQADgWAAgZIAcACIgBASIgBAQIAHAKIAHAIIAAhFIgvAAIAAgbIAlAAIAAgVIgfAAIAAgaIAfAAIAAgXIAdAAIAAAXIAeAAIAAAaIgeAAIAAAVIAZAAIgCgBIARgIIAMgJIAGgJIADgKIgYAAIAAgaIBsAAIAAAVQAAAvgKAHQgFAFgIABQgJACgMAAIgMAAIgFgbIALABIAGAAIAGAAIAEgCIACgIIACgVIgaAAQgBAIgDAIQgCAIgDAFQgFAIgIAIQgIAGgMAHIgPgOIAAAUIgYAAIAAAZIAYAAIAAAaIgYAAIAAAhQAMADASACQARACAWAAIBLgCIgFAdIhMAAQgcABgUgEQgUgDgNgGIgOgKQgHgGgGgJIgEAXIgHAUgAA2BrIAAhlIgGALIgHALIgMgiQANgVAKgZQAJgYAGgcIABgFIAeAIQgFAXgIAUIAAClgABeBnIAAgaIAOAAIAAiDIAnAAIACgGIABgHIgzAAIAAgaIA4AAIABgIIAAgDIABgGIAiAFIgBABIgBAFIgBAGIA9AAIAAAaIhCAAIgCAHIgCAGIA7AAIAACDIANAAIAAAagACLBNIBEAAIAAgLIhEAAgACLAsIBEAAIAAgKIhEAAgACLANIBEAAIAAgLIhEAAgACLgTIBEAAIAAgKIhEAAgAiJBBIAAhNIBjAAIAABNgAhsAoIAqAAIAAgcIgqAAg");
	this.shape_3.setTransform(38.8,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_3_mc, new cjs.Rectangle(-24.1,-17.9,118.5,132.5), null);


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 6
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(74.8,103.5,1,1,180);

	this.instance_1 = new lib.heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 9
	this.instance_2 = new lib.heart_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape_1.setTransform(38.5,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlTIOQgfAAAAgeIAAveQAAgfAfAAIKnAAQAfAAAAAfIAAPeQAAAegfAAg");
	this.shape_2.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_2_mc, new cjs.Rectangle(-24.1,-17.9,118.5,132.5), null);


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.spade_1();
	this.instance.parent = this;
	this.instance.setTransform(10.9,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// poker
	this.instance_1 = new lib.spade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,103.5,1,1,180);

	this.instance_2 = new lib.spade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape_1.setTransform(38.5,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlTIOQgfAAAAgeIAAveQAAgfAfAAIKnAAQAfAAAAAfIAAPeQAAAegfAAg");
	this.shape_2.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1_mc, new cjs.Rectangle(-24.1,-17.9,118.5,132.5), null);


(lib.card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiBArIATgEIAPgDIgHgDIgFgEIgIAEIgKADIgFgHIALgDIAJgEQAEgBADgEIAIgHIAGAEIgCADIgDACIAggCIAAAHQgBADgEADIgIAGIAMABIAQACIgDAHIgTgCIgQgEIgQAFIgXAFgAhkAbIAHADIAHAEIABgBIAHgEIAGgEgAjbAoIBQgEIABAIIhRAEgAglAkIAhgBIgBgQIgWABIAAgIIAWgBIgBgMIgYABIAAgFIgDACIgEACIgFgIQAHgDAFgEIAJgFIAFgFIAEgEIgQABIgBgHIAegCQAFAHAKAFQAJAHAPAFIgFAJIgEgCIgEgBIAAAFIgZACIABAMIAYgCIAAAIIgYABIABAQIAjgCIAAAHIhMAFgAgGgZIgFAGIgGAFIgJAGIAxgCIgFgEIgFgDIgJgGIgGgIIgEAGgABWAmIAAgLIglABIAAgHIAkgCIAAgHIgdADIgCgjIAdgDIAAgFIgkABIAAgHIAjgCIAAgIIAIAAIABAIIAjgCIABAIIgkACIAAAFIAegBIACAjIgeABIABAHIAkgCIABAIIglACIABALgAA/AAIAAAHIAVgCIAAgGgABdgBIAAAGIAVgCIAAgGgAA+gNIABAGIAVgBIgBgHgABcgPIAAAHIAWgCIgBgGgAClAZIAEAAIAEAAIADAAIABgCIgBgTIgPACIgRABIgCgHIAIAAIAIAAIAKgIIAJgJIgOACIgRADIgCgIIAFAAIAFgBQAEgDACgDIAGgHIgMABIgNAAIgDgGIAngEQASgCAPgDIAEAGIgSAFIgVACIgEAHIgGAGIALgBIAKgBIAEgFIAGgGIAIAEIgRAQIgQANIASgBIAOgDIgDgEIgDgFIAFgEIAKAMIAHAJIgHAGIgFgIIgKABIgMACIABAVQAAAEgCACQgCADgGABIgIAAgACMAZIALgIIAKgLIAGAFIgJAMIgMAJgADNATIgNgJIAGgGIAMAIIAKAJIgGAHIgJgJgAiDARQAMgDAGgEIAEgCIADgDIgaABIAAgGIAlgCIAAgFIgfACIAAgHIAfgCIAAgEIAIAAIAAADIAegBIAAAHIgeABIAAAFIAmgCIAAAGIgbABIABAEIAAACQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBIAWAAIAAAHIgYABIgEAAIgDgCIgCgCIAAgDIgBgGIgOABIgDAFIgEAFIgIAEIgMAGgAjUAIIA/gDIAAAJIg/ADgAjagUIBIgEIABAJIhJAEgAhwgTIgUABIgBgIIAUgBIAAgGIAIgBIABAHIAKAAIABAHIgLAAIAAAEIgIAAgAhPgVIgKABIgBgHIALgBIgBgHIAJAAIAAAHIAUgBIABAGIgUACIAAAEIgJAAg");
	this.shape.setTransform(37.9,23.7,1,1,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.instance = new lib.card_0();
	this.instance.parent = this;
	this.instance.setTransform(8.9,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape_1.setTransform(38.5,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlTIOQgfAAAAgeIAAveQAAgfAfAAIKnAAQAfAAAAAfIAAPeQAAAegfAAg");
	this.shape_2.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AFVoNIqoAAQgfAAAAAfIAAPeQAAAeAfAAIKoAAQAeAAAAgeIAAveQAAgfgeAAg");
	this.shape_3.setTransform(38.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_0_mc, new cjs.Rectangle(-24.1,-17.9,118.5,132.5), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg_3
	this.instance = new lib.bg_3();
	this.instance.parent = this;
	this.instance.setTransform(300,0,1.5,1,0,0,180);

	this.instance_1 = new lib.bg_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.528,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.arrow_clip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjgpIBHAqIhHAog");
	this.shape.setTransform(3.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_clip, new cjs.Rectangle(0,0,7.2,8.3), null);


(lib.lightmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.lightbar();
	this.instance.parent = this;
	this.instance.setTransform(130.8,105.1,0.384,1.549,-150.8,0,0,5.6,96);
	this.instance.alpha = 0.711;
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance.cache(-2,-2,16,196);

	this.instance_1 = new lib.lightbar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.8,105,0.385,0.404,-137,0,0,5.8,96);
	this.instance_1.alpha = 0.5;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,16,196);

	this.instance_2 = new lib.lightbar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.9,105.1,0.385,0.635,-120.7,0,0,5.8,96);
	this.instance_2.alpha = 0.5;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_2.cache(-2,-2,16,196);

	this.instance_3 = new lib.lightbar();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130.8,105,0.385,0.977,-104.2,0,0,5.9,96);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_3.cache(-2,-2,16,196);

	this.instance_4 = new lib.lightbar();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.9,105,0.386,0.636,-90.9,0,0,5.9,96);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_4.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_4.cache(-2,-2,16,196);

	this.instance_5 = new lib.lightbar();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130.9,105.1,0.386,0.637,-59.5,0,0,5.9,96);
	this.instance_5.alpha = 0.141;
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_5.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_5.cache(-2,-2,16,196);

	this.instance_6 = new lib.lightbar();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131,105.1,0.247,1.049,-47.1,0,0,6,96.2);
	this.instance_6.alpha = 0.781;
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_6.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_6.cache(-2,-2,16,196);

	this.instance_7 = new lib.lightbar();
	this.instance_7.parent = this;
	this.instance_7.setTransform(131,105,0.387,1.053,-5.7,0,0,6.2,96);
	this.instance_7.alpha = 0.141;
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_7.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_7.cache(-2,-2,16,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 2
	this.instance_8 = new lib.lightspot();
	this.instance_8.parent = this;
	this.instance_8.setTransform(130.3,100.3,1,1,2.8,0,0,12.1,9.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_8.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance_8.cache(-2,-2,28,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightmc, new cjs.Rectangle(-113.9,-70,442,321.2), null);


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.hint_clip();
	this.instance.parent = this;
	this.instance.setTransform(55.6,5.9,1,1,0,0,0,59.6,4.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hint_mc, new cjs.Rectangle(-7,-1.3,129,18), null);


(lib.gift_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjHIQg9gKgogKQgMgHAajEQAFgoAKgvQAJguAHgUQAKgdAShAQAXhQAFgjQAFgegHguQgIg1AAgTQABgeARgSQAIgJAIgDIBJACQAKAAADgWIAEgoQACgPAGgGIANgIQAFgDAAgUQAAgTAFgBQAGgCAUACIAGAAIAAABIALABQALADgBAIIgDAiIAJAHQAJAIAAAEQABAHgCAzIAGAGQAGAHAAALQA7ALADAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgGgEgKgCQgWgDgMgEQAMAEAWADQAKACAGAEQgFAKgfAdIgrgWQgqgXgBgBIgJhSIAXhPIgXBPIAJBSQABABAqAXIArAWQAfgdAFgKIAGAGIALAUQAEAJgIApIgMBBQgCAUAEAjQAEAigCAJQgCAMgLAEQgKADAAAFIABB4QALBHgQCTQgLBfgLA2QgCANgJAEIgJABIgsABQhRAAhggOgAC6krIAAAAg");
	mask.setTransform(21.4,48);

	// Layer 3
	this.instance = new lib.gift_shine_mc();
	this.instance.parent = this;
	this.instance.setTransform(21.3,48,1,1,0,0,0,20.4,47);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.giftjpgcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.85,0.85);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_mc, new cjs.Rectangle(0.9,1,40.9,94.1), null);


(lib.CFA_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer 2
	this.instance = new lib.arrow_clip();
	this.instance.parent = this;
	this.instance.setTransform(82.7,11.9,1,1,0,0,0,3.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:83.7},0).wait(1).to({x:84.6},0).wait(1).to({x:85.2},0).wait(1).to({x:85.5},0).wait(1).to({x:85.7},0).wait(1).to({x:84.6},0).wait(1).to({x:83.7},0).wait(1).to({x:83.1},0).wait(1).to({x:82.8},0).wait(1).to({x:82.7},0).wait(1).to({x:83.7},0).wait(1).to({x:84.6},0).wait(1).to({x:85.2},0).wait(1).to({x:85.5},0).wait(1).to({x:85.7},0).wait(1).to({x:84.6},0).wait(1).to({x:83.7},0).wait(1).to({x:83.1},0).wait(1).to({x:82.8},0).wait(1).to({x:82.7},0).wait(1).to({x:83.7},0).wait(1).to({x:84.6},0).wait(1).to({x:85.2},0).wait(1).to({x:85.5},0).wait(1).to({x:85.7},0).wait(1).to({x:84.6},0).wait(1).to({x:83.7},0).wait(1).to({x:83.1},0).wait(1).to({x:82.8},0).wait(1).to({x:82.7},0).wait(1).to({x:83.7},0).wait(1).to({x:84.6},0).wait(1).to({x:85.2},0).wait(1).to({x:85.5},0).wait(1).to({x:85.7},0).wait(1).to({x:84.6},0).wait(1).to({x:83.7},0).wait(1).to({x:83.1},0).wait(1).to({x:82.8},0).wait(1).to({x:82.7},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2AsQAQAAAOgCIAZgFIgGgFIgHgGIAMgIIAJAGIAIAGQAHgDAFgFIAJgKIghAAIgTALIgVAJIgLgPQATgFANgHQAOgGAJgIIgEABQgLAGgNADIgeAHIgHgQIAWgDQALgBAGgDIgGgFIgGgGIALgIIAJAGIAIAHQAFgDAFgEIAKgIIglAAIgOAIIgOAIIgJgPQANgFAKgGQALgFAGgIIARACIgCAEIgCADIArAAIAAALQgFAJgIAGQgGAHgIAFIAQADIgEAEIgEAEIAjAAIAAALQgJAXgYAMQgaAPguAAg");
	this.shape.setTransform(67.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6ApIAUgBIANgBIgLgIIgJgJIAGgEIgJAAIAAg2IAoAAIAAgFIgvAAIAAgPIBvAAIAAAPIgwAAIAAAFIApAAIAAA2IgpAAIgBAKIgCAGQAQAFAXAAIAPAAIgFAQQgmgBgUgGIgBgBIgBAAIgFACIgGACIgRAFIgVABgAgUAYIAJAGQADgFAAgHIgVAAQAEAEAFACgAAIAEIAYAAIAAgHIgYAAgAgfAEIAXAAIAAgHIgXAAgAAIgPIAYAAIAAgHIgYAAgAgfgPIAXAAIAAgHIgXAAg");
	this.shape_1.setTransform(54.6,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA8IAAg4IgHABIgHAAIgGgOQAdgCAWgHIABAAIABAAIgQAAIgCgPIAIAAIAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgXIARAAIAAAcIgBAHIAIgFIAHgGIANAJQgGAGgGAEIgNAHIAnAAIAABEIgRAAIAAgEIg3AAIAAAFgAgXAqIA3AAIAAgHIg3AAgAgXAZIA3AAIAAgHIg3AAgAgXAIIA3AAIAAgGIg3AAgAg5ggQAIgCAIgGQAIgGAIgJIAJALQgIAKgJAHQgIAHgJAEgAAPgtIALgKIATANIAPAMIgMANQgRgRgQgLg");
	this.shape_2.setTransform(41.6,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCA7IgCgQIAIABIAEAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAg/IAQAAIAABFQAAAGgEADQgDADgHAAgAgqA6IAAg6IgFAFIgFAGIgHgTQAJgKAHgMQAGgNAFgPIASAFIgGAOIgFANIAABUgAAmAVIgHgWIAPgFIAIAWIAGAVIgQAJIgGgZgAgYAjQAFgJAEgLQAEgKADgLIANADQgCALgDAMQgDALgGAMgAgXgPQAGgIAEgLQAGgKACgNIAQADIgBAFIgCAGIAyAAIgCASIgDARIgSgDIADgJIACgJIgmAAQgDAIgEAHIgJANg");
	this.shape_3.setTransform(28.6,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA8IAAgVIgZAAIAAAOIgRAAIAAgZIAqAAIAAgEIghAAIAAgdIAhAAIACgDIADgCIgZABIgbACIgCgLIANgBIANAAIAAgEIgUAAIAAgIIAUAAIAAgEIgYAAIAAgIIAYAAIAAgEIgTAAIAAgIIATAAIAAgEIAQAAIAAAEIARAAIAAAIIgRAAIAAAEIAUAAIAAAIIgUAAIAAAEIASAAIAAAIIgSAAIAAADIALgBIAKAAIAAAHIAKACIgEAEIgDADIAlAAIAAAdIglAAIAAAEIAtAAIAAARQAAAEgDADQgDACgGAAIgOAAIgCgLIAFAAIADAAIADgBIABgBIAAgCIgdAAIAAAVgAgcARIA4AAIAAgEIg4AAgAgcAFIA4AAIAAgEIg4AAgAAagJIgCgNIAFAAIACAAIADgBIABgCIAAgNIgSAAIAFAGIAEAHIgLAIIgEgHIgFgIIAJgGIgKAAIAAgLIAeAAIAAgKIAQAAIAAAKIAJAAIAAALIgJAAIAAASQAAAFgDADQgDADgGAAg");
	this.shape_4.setTransform(15.6,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D41615").s().p("Al7BzQgqAAgdgdQgdgdAAgqIAAgdQAAgqAdgdQAdgdAqAAIL3AAQAqAAAdAdQAdAdAAAqIAAAdQAAAqgdAdQgdAdgqAAg");
	this.shape_5.setTransform(48,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.1,23);


(lib.star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.lightmc();
	this.instance.parent = this;
	this.instance.setTransform(125.4,81.3,0.746,0.746,0,0,0,138.7,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_mc, new cjs.Rectangle(0,-29.3,227,224), null);


// stage content:
(lib.sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5pArXQhkAAAAhkMAAAhTlQAAhkBkAAIfQAAQA3AAAZAeMBNBAAAQBkAAAABkIAAGaIEOAAQBkAAAABkMAAABG7QAABkhkAAIigAAIAACqQAABkhkAAgA41YTMAu3AAAMAAAgnDMgu3AAAg");
	this.shape.setTransform(159,94.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(202));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AACAoQgDgGAAgIQAAgIADgFQAEgGAHAAQAPAAAAATQAAATgPAAQgHAAgEgFgAAFAaQAAANAIAAQAIAAAAgNQAAgNgIAAQgIAAAAANgAgxAaQAAgTAPAAQAOAAAAATQAAATgOAAQgPAAAAgTgAgqAaQAAANAIAAQAIAAgBgNQABgNgIAAQgIAAAAANgAA6AgIAGAAQAAAHAFAAQAGAAAAgEQAAgDgIgFQgJgFAAgGQAAgJALAAQALAAABALIgGAAQgBgGgFAAQgEAAAAAEQAAACAHAEQAKAGgBAGQAAALgMAAQgLAAAAgNgAAyAsIgKgUIABAAQAHAAAAgGQAAgFgHAAIgEAAIAAAfIgGAAIAAglIAMAAQAMAAAAALQAAAHgGADIAKAQgAgNAsIAAgfIgIAAIAAgGIAVAAIAAAGIgHAAIAAAfgAg6AsIAAgYIgIASIgJgSIAAAYIgGAAIAAglIAHAAIAIARIAHgRIAIAAIAAAlgAgUgSIAAgaIAHAAIAAAaQAAAGAGAAQAFAAAAgGIAAgaIAHAAIAAAaQAAAMgMAAQgNAAAAgMgAAwgTIAGAAQAAAHAGAAQAGAAAAgEQgBgDgIgFQgJgFABgGQgBgJAMAAQALAAAAALIgGAAQgBgGgEAAQgFAAAAAEQAAACAHAEQAKAGAAAGQAAALgMAAQgLAAgBgNgAgvgTIAHAAQAAAHAFAAQAGAAgBgEQAAgDgIgFQgJgFAAgGQAAgJAMAAQAMAAAAALIgHAAQgBgGgEAAQgEAAAAAEQgBACAIAEQAJAGABAGQgBALgMAAQgLAAgBgNgABsgHIAAglIAHAAIAAAlgABggHIAAgQIgOAAIAAAQIgGAAIAAglIAGAAIAAAPIANAAIAAgPIAIAAIAAAlgAAlgHIAAglIAHAAIAAAlgAAIgHIAAglIANAAQALAAAAAJQAAAHgFACQAGABAAAIQAAAKgLAAgAAPgMIAGAAQAFAAAAgGQABgFgHAAIgDAAIAAgGIADAAQAGAAgBgFQABgEgGAAIgFAAgAg+gHIAAgfIgHAAIAAgGIAWAAIAAAGIgIAAIAAAfgAhPgHIAAglIAGAAIAAAlgAhcgHIAAgYIgIASIgIgSIAAAYIgGAAIAAglIAGAAIAIARIAHgRIAIAAIAAAlg");
	this.shape_1.setTransform(17.4,29.5,0.784,0.784);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED3636").s().p("AhCAnIAthNIBYAAIgtBNg");
	this.shape_2.setTransform(12.1,21.2,0.784,0.784);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED3636").s().p("AgVAnIgthNIBZAAIAsBNg");
	this.shape_3.setTransform(22.6,21.2,0.784,0.784);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED3636").s().p("AgsAAIAshNIAtBNIgtBNg");
	this.shape_4.setTransform(17.4,12.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(202));

	// SP
	this.instance = new lib.sp_mc();
	this.instance.parent = this;
	this.instance.setTransform(262.7,42.4,1,1,-9,0,0,56.1,19.6);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).to({x:232.7,alpha:1},10,cjs.Ease.get(1)).wait(45));

	// CFA
	this.instance_1 = new lib.CFA_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,243.5,1,1,0,0,0,55.6,11.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({y:223.5,alpha:1},11).wait(41));

	// star
	this.instance_2 = new lib.star_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266.9,181.9,1,1,0,0,0,119,77.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({rotation:360},18,cjs.Ease.get(1)).to({alpha:0},15).to({_off:true},1).wait(102));

	// star
	this.instance_3 = new lib.star_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(206.9,121.9,1,1,0,0,0,119,77.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({rotation:360},18,cjs.Ease.get(1)).to({alpha:0},9).to({_off:true},1).wait(110));

	// star
	this.instance_4 = new lib.star_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.9,181.9,1,1,0,0,0,119,77.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({rotation:360},18,cjs.Ease.get(1)).to({alpha:0},11).to({_off:true},1).wait(107));

	// star
	this.instance_5 = new lib.star_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(46.9,111.9,1,1,0,0,0,119,77.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({rotation:360},18,cjs.Ease.get(1)).to({alpha:0},12).wait(111));

	// card_4
	this.instance_6 = new lib.card_4_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(263.3,154.9,0.85,0.85,8,0,0,39.5,53.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({regY:53.6,scaleX:1.2,scaleY:1.2,rotation:7.8,x:259.6,y:154.8,alpha:1},17,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85,x:259.5,y:154.7},3).wait(55).to({scaleX:1.2,scaleY:1.2,y:154.8},5,cjs.Ease.get(-1)).to({regX:39.6,regY:53.2,scaleX:0.05,scaleY:0.05,y:154.7},2,cjs.Ease.get(-1)).to({_off:true},1).wait(78));

	// card_3
	this.instance_7 = new lib.card_3_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(187.2,145.7,0.85,0.85,3,0,0,39.1,53.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,rotation:2.8,x:186.7,y:145.8,alpha:1},14).to({scaleX:0.85,scaleY:0.85,x:186.6},3).wait(52).to({regX:39,scaleX:1.2,scaleY:1.2,y:145.7},6,cjs.Ease.get(-1)).to({regX:38.6,regY:53.3,scaleX:0.05,scaleY:0.05},3,cjs.Ease.get(-1)).to({_off:true},1).wait(82));

	// card_2
	this.instance_8 = new lib.card_2_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(115.4,145.9,0.85,0.85,-3,0,0,39,53.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,rotation:-2.8,x:115.5,alpha:1},11).to({scaleX:0.85,scaleY:0.85,x:115.4},3).wait(49).to({scaleX:1.2,scaleY:1.2},6,cjs.Ease.get(-1)).to({regX:39.5,regY:54,scaleX:0.05,scaleY:0.05},3,cjs.Ease.get(-1)).to({_off:true},1).wait(88));

	// card_1
	this.instance_9 = new lib.card_1_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(44.5,153.3,0.85,0.85,-10,0,0,38.5,53.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,rotation:-9.8,x:44.2,y:153.8,alpha:1},8,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85,x:44.1,y:153.6},3).wait(45).to({scaleX:1.2,scaleY:1.2,x:44,y:153.7},7,cjs.Ease.get(-1)).to({regX:38.6,regY:53.4,scaleX:0.05,scaleY:0.05,y:153.6},3,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// hint
	this.instance_10 = new lib.hint_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(237.3,240.1,1,1,0,0,0,58.8,7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48).to({_off:false},0).to({alpha:1},4).wait(64).to({alpha:0},6).wait(80));

	// man_02
	this.instance_11 = new lib.man_2_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.3,158.1,0.85,0.85,0,0,0,179.5,178.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({x:150.1,alpha:1},6).wait(75).to({x:11.1,y:157.5,alpha:0},8,cjs.Ease.get(1)).wait(73));

	// water
	this.instance_12 = new lib.gift_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(251.3,198.3,0.05,0.05,0,0,0,21,48);
	this.instance_12.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(124).to({_off:false},0).to({regX:20.9,regY:48.1,scaleX:1.1,scaleY:1.1,x:251.1,y:131.2},7).to({regX:21.3,regY:48,scaleX:1,scaleY:1,x:251.2,y:124.2},10).to({x:252.4,y:118.3},10).to({y:124.3},10).to({y:118.3},9).to({y:124.3},9).to({y:118.3},8).to({y:124.3},8).wait(7));

	// finger
	this.instance_13 = new lib.finger_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(159.3,159.4,0.85,0.85,0,0,0,156,187.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(13).to({x:7.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(84).to({_off:false,x:149.3},0).to({x:159.3,alpha:1},2,cjs.Ease.get(1)).wait(71));

	// card_0
	this.instance_14 = new lib.card_0_mc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(149.9,136.6,0.051,0.051,4.8,0,0,39,53.8);
	this.instance_14.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:38.6,regY:54.1,scaleX:0.85,scaleY:0.85,rotation:2165,x:150,alpha:1},11,cjs.Ease.get(1)).wait(25).to({x:-1.8},8,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false,regX:37.6,regY:53.1,scaleX:0.05,scaleY:0.05,rotation:2164.8,x:149.9,alpha:0},0).to({regX:38.6,regY:54.1,scaleX:0.85,scaleY:0.85,rotation:2525,x:150,alpha:1},7,cjs.Ease.get(1)).wait(71));

	// man_01-d
	this.instance_15 = new lib.man_1_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(129.6,159.3,0.85,0.85,0,0,0,156,187.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(127).to({_off:false},0).to({x:159.6,alpha:0.301},7,cjs.Ease.get(1)).to({_off:true},1).wait(67));

	// man_01-c
	this.instance_16 = new lib.man_1_mc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(129.6,159.3,0.85,0.85,0,0,0,156,187.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(131).to({_off:false},0).to({x:159.6,alpha:0.398},8,cjs.Ease.get(1)).wait(63));

	// man_01-b
	this.instance_17 = new lib.man_1_mc();
	this.instance_17.parent = this;
	this.instance_17.setTransform(129.6,159.3,0.85,0.85,0,0,0,156,187.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(137).to({_off:false},0).to({x:159.6,alpha:0.5},6,cjs.Ease.get(1)).wait(59));

	// man_01
	this.instance_18 = new lib.man_1_mc();
	this.instance_18.parent = this;
	this.instance_18.setTransform(159.6,159.3,0.85,0.85,0,0,0,156,187.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(11).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(13).to({x:7.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(80).to({_off:false,x:129.6},0).to({x:159.6,alpha:1},6,cjs.Ease.get(1)).wait(71));

	// bg
	this.instance_19 = new lib.bg_mc();
	this.instance_19.parent = this;
	this.instance_19.setTransform(156,125,1,1,0,0,0,156,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(202));

	// 圖層_23
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A6PWHMAAAgsNMA0fAAAMAAAAsNg");
	this.shape_5.setTransform(155,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-58,758,555);
// library properties:
lib.properties = {
	id: 'F8DE76324117DC47A6FEB54FAD7D29E7',
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sp_atlas_.png", id:"sp_atlas_"}
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
an.compositions['F8DE76324117DC47A6FEB54FAD7D29E7'] = {
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