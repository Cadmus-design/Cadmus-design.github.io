(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chinatrsut_2011_atlas_", frames: [[394,0,60,66],[491,0,6,250],[333,96,156,32],[333,0,59,94],[0,189,181,46],[190,0,141,151],[190,153,204,91],[0,0,188,187]]}
];


// symbols:



(lib.BALL = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.card = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.have = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.passport = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ticket_01 = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ticket_02 = function() {
	this.spriteSheet = ss["chinatrsut_2011_atlas_"];
	this.gotoAndStop(7);
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


(lib.mc_ticket_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am1N8Qg4gtjaihIjPiZQgGgEgDgKQgFgSAPgYIRV1uIAQgMQAZgIAxAVQBPAiIVD8IAKAGQALAHAHAJQAUAfgmAqQgnAqpYLCIpQK5QgHALgRADIgIAAQghAAgtgkg");
	mask.setTransform(94.3,93.4);

	// 圖層 1
	this.instance = new lib.ticket_02();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_ticket_02, new cjs.Rectangle(1.4,0.6,185.8,185.7), null);


(lib.mc_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.card();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_card, new cjs.Rectangle(0,0,59,94), null);


(lib.立即申辦 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFcBPIAAgoIgSAAIAAgOIASAAIAAgUIgUAAIAAgOIAMAAQgCgQgFgOIAMgEIAFASIAFAQIACAAQAGgMADgWIAOADQgEAWgFAJIAOAAIAAAOIgWAAIAAAUIAUAAIAAAOIgUAAIAAAogABdBPIAAgpIg+AAIAAhcIA+AAIAAgYIASAAIAAAYIA/AAIAABcIg/AAIAAApgABvAXIAuAAIAAgYIguAAgAAwAXIAtAAIAAgYIgtAAgABvgQIAuAAIAAgWIguAAgAAwgQIAtAAIAAgWIgtAAgAhYBPIAAiZIA+AAIAAB1QAAAKgEAEQgEAEgMAAIgPAAIgFgRIASABQAGAAAAgGIAAhhIgeAAIAACJgADmBCQAMgOADgPIgRACIgCgOIAWgCIAAgTIgUAAIAAgNIALAAQgCgQgGgOIANgEIABAGIAEAMIAEAQIADAAIAAgDQAGgNADgSIANADQgEAWgFAJIAKAAIAAANIgQAAIAAARIAIgCQAIgCACgBIAAANIgKAEIgJACQgFAbgQARgAELBFQALgRAFgRQAGgSABgvIgJAAIAAgOIAJAAIAAgiIANAAIAAAiIAYAAIAAAhQAAAsgBANQAAAPgGAHQgGAHgNAAIgGAAIgDgQIAKABQAGAAACgFQACgEAAgNQABgVAAgkIAAgLIgKAAIAAAHQAAAfgEAXQgEAWgPAZgAmABJIAAgQICfAAIAAAQgAi0A2IALgBIAAh+IBDAAIAABTIg0AAIAAAoQATgDAOgFIgFgKIgEgMIAPgFQAKAWAJAdIgRAFIgCgHQgBgFgCgCQgZAHgYAFIgJADgAiagEIAkAAIAAgVIgkAAgAiagnIAkAAIAAgTIgkAAgAkkAuQAOgfAKgmIAQAEIgDAMQgHAegMAdgAlkgRIAQgFQALAZAIAgIACAMIgRAFQgJgtgLgYgAl9gdIAAgQIBOAAQgGgGgJgHIgOgLIAMgJQAOAIAPANIgMAMIBLAAIAAAQgAFIgtIAAgOIAVAAIgCgIIgCgJIAOgCIAFAQIAAADIATAAIAAAOgADlgtIAAgOIATAAIgBgIQgBgGgCgDIAOgCQACAEABAGIACAJIATAAIAAAOg");
	this.shape.setTransform(39.2,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.立即申辦, new cjs.Rectangle(-2.6,-16.9,88.2,27.1), null);


(lib.紅利折抵先省錢再享分期0利率 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("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");
	this.shape.setTransform(68.2,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.紅利折抵先省錢再享分期0利率, new cjs.Rectangle(-2,-21.8,145.4,92.9), null);


(lib.Symbol33fewfewfw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("AhgBWQAhgSAQgVQAPgVAFgbIgmAAIAAgVICJAAQgDBcgJAQQgEAIgIAEQgHADgcAAIgMAAIgGgVIAjAAQAKAAADgOQAEgOACg1Ig1AAQgFAbgMAVQgLAWgXASQgWASgEAAgAhqgTQAbgYAOgUQAOgUAJgVIAUAKQgUAzgxArgAAihRIgrAAIAAgVIA4AAQAOAbAMARQANARAVAUIgSASQgdgdgagxg");
	this.shape.setTransform(10.7,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33fewfewfw, new cjs.Rectangle(0,0,21.5,21.1), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("AA/BOIgDgEQgQAYgXANIgMgVQAZgKAOgXQgJgXgKgvIgKARIgLgVQAKgRAHgSQAHgSAEgoIAVADQgCAVgEAOIA2AAIAAATIgOAAQgEBBgQArQALASAZARIAAABIgNAUQgSgQgNgRgAAsgtIgCAGQAIAuAJAaQAJgcAEg6IgaAAIgCAIgAglBfQgcAPghAAIgCAAIgGgLIAAgGIAGAAIAEABQAWgBARgHIgQgIIgTgIIAOgRIgcAAIAAgRIApAAIAEgEIACgEIABgCIgmAAIAAgpIAqAAIAAgLIgrAAIAAgdIgJAAIAAgQIAJAAIAAgbIArAAIAAgMIATAAIAAAMIAqAAIAAAbIAMAAIAAAQIgMAAIAAAdIgqAAIAAALIArAAIAAApIguAAIAAABIgCAFIgDAEIA9AAIAAARIgRAAQgJARgMAMIAYALIgKARgAhCBAIAbAKQAKgGAKgPIglAAgAgjALIAaAAIAAgMIgaAAgAhNALIAXAAIAAgMIgXAAgAgjgqIAYAAIAAgNIgYAAgAhOgqIAYAAIAAgNIgYAAgAgjhHIAYAAIAAgLIgYAAgAhOhHIAYAAIAAgLIgYAAg");
	this.shape.setTransform(10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,21.4,22.1), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("ABPBvIAAgRIgoAAIAAARIgVAAIAAhzIAbAAIAAhqIAVAAIAAAoIAnAAIAAgBIAFAAIAAAQIgCAAIAAAFIgqAAIAAAuIAhAAIAABzgAAnBLIAoAAIAAg9IgoAAgAhtBnQAKgSAEgZIARACIgCAIQgEAXgIASgAhFBVIgBgXIAQgBQADALAAAKIAAAYIgTABIABgWgAgqA9IAQgCQAGATACAVIgRAFQgCgZgFgSgAgEBbIgDgNIgHgTIAOgEQAJAWADAOIgPAGgAhtAiIA3gBIAAgQIgtAAIAAgRIAtAAIAAgOIgvAAIAAhZIBvAAIAABZIguAAIAAAOIAsAAIAAARIgsAAIAAAPIAbgCQAKAAAKgDIAAASIg4AFQglAAgXADgAgkgfIAfAAIAAg3IgfAAgAhUgfIAeAAIAAg3IgeAAgAgegrIABgFIAEgNIADgQIALADIgDASQgCANgBAEgAhLg4IgFgRIALgDIAFAOIAEAPIAAAEIgMAEg");
	this.shape.setTransform(11,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,22.1,22.1), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007D7D").s().p("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");
	this.shape.setTransform(96.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,192.8,28.5), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C22027").s().p("AihBvIAahKIAfADIgjBJgAC+AzQgSgcAAgmQAAgqASgbQARgcAfAAQAeAAASAcQARAcAAAoQAAAngRAcQgSAdgeAAQgfAAgRgdgADUhAQgKAWAAAaQAAAbAKAVQAKAVAQAAQARAAAJgUQAJgTAAgeQAAgcgJgVQgKgVgQAAQgQAAgKAWgAA3AzQgRgcAAgmQAAgqARgbQASgcAeAAQAfAAARAcQASAcAAAoQAAAngSAcQgRAdgfAAQgeAAgSgdgABOhAQgKAWAAAaQAAAbAKAVQAJAVARAAQAQAAAJgUQAKgTAAgeQAAgcgKgVQgKgVgQAAQgQAAgJAWgAhPAzQgRgcAAgmQAAgqARgbQASgcAeAAQAfAAAQAcQASAcAAAoQAAAngSAcQgQAdgfAAQgeAAgSgdgAg4hAQgKAWAAAaQAAAbAKAVQAJAVARAAQAQAAAJgUQAJgTAAgeQAAgcgJgVQgKgVgQAAQgQAAgJAWgAjbBLIAAgjIhTAAIAAgOIBSiJIAeAAIAAB/IAVAAIAAAYIgVAAIAAAjgAkKAQIAvAAIAAhTg");
	this.shape.setTransform(157,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007D7D").s().p("AGLBbIgegGIAIgOIA6AJIgGASIgegHgAECBSQAcgEAUgFIAIgCIAMAMQgbAJgcAEIgFACgABTBiIAAiGIAtAAIAAg9IATAAIAAA9IAxAAIAABtQAAALgEAFQgDAGgLgBIgZAAIgFgSIAXABQAHAAAAgGIAAgSIhNAAIAAAtgABlAkIBNAAIAAgUIhNAAgABlAAIBNAAIAAgSIhNAAgAh7BTQAYgfAAg9IAAhPIBEAAIAACjQAAAUgPAAIgVAAIgFgUIAUABQAEAAAAgEIAAgpIgkAAQgEAhgWAhgAhSAMIAiAAIAAgfIgiAAgAhSgmIAiAAIAAgfIgiAAgAmlBQQAbgRANgTQAMgTAEgZIgeAAIAAgTIBwAAQgCBUgHAOQgEAIgGADQgGAEgXgBIgKAAIgFgTIAdAAQAIAAADgMQADgOABgwIgsAAQgEAZgJATQgKAUgSARQgSAQgEAAgAAcBQQAPgYANgqIAQAMQgOAvgPAWgAjJBTQAPgOAMgYIAPAHIgEAHQgJATgOARgAiWA1IANgIIADADQAGAIAJANIABADIgOALQgIgQgKgOgAEXBFIAAg/IgIADIgJACIgFgRQAegDAOgPIgnAAIAHglIAtAAIABgLIg3AAIAAgOIA3AAIAAgLIARAAIAAALIAaAAIAAgLIAQAAIAAALIAtAAIAAAlIgtAAIAAAMIA3AAQgBAUgCAIQgDAJgJAAIgDAAIAABFgAEoA4IBhAAIAAgMIhhAAgAEoAgIBhAAIAAgLIhhAAgAEoAKIBhAAIAAgJIhhAAgAGKgMIgCgEIANABIACAAQAEAAAAgDIABgGIgmAAIAAAMIAUAAgAFBgXQgEAHgGAEIAuAAIAAgMIgjAAIgBABgAFHglIAfAAIAAgMIgcAAgAEZglIAcAAIACgHIABgFIgdAAgAF2g9IAeAAIAAgLIgeAAgAFLg9IAbAAIAAgLIgaAAgAjJApIAAgPIAQAAIAAhVIgMAAIAAgQIAMAAIAAgVIARAAIAAAVIAfAAIAAgVIARAAIAAAVIANAAIAAAQIgNAAIAABVIAMAAIAAAPgAioAaIAfAAIAAgUIgfAAgAiogIIAfAAIAAgSIgfAAgAiogqIAfAAIAAgRIgfAAgAmugQQAXgWALgSQAMgSAHgUIAQAJQgQAvgoAngAAtgMIgLgHIgFgEIAKgPIAQAKIARAMIgKARgAk6hIIgjAAIAAgUIAuAAQALAaALAOQAKAQARASIgPAQQgYgbgVgrgACfg0QANgTAIgWIAPAJQgIAbgLARgABRhPIgCgEIAQgJQAKASAHAQIAEAHIgRAKQgIgVgKgRgAAfhLIALgQIARAKQAJAFAIAHIgMASQgWgTgLgFg");
	this.shape_1.setTransform(59.1,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1E24").s().p("AHlBiIAAgPIghAAIAAAPIgQAAIAAhmIAVAAIAAhdIARAAIAAAkIAiAAIAAARIgiAAIAAAoIAbAAIAABmgAHEBBIAhAAIAAg1IghAAgAFNBbQAIgQADgWIAOACIgCAHQgDAVgGAOgAn7BQQAbgUAHghIABgGIgeAAIAAgOIADgEQAOgPALgUIgfAAIAAgSIAzAAIAAAPQgOAagLANIAZAAIAAANIgBAEQgBALgGAOQAKASAPAEQAQAEAlABQAdAAAYgCIgDAUIguAAQgyABgPgHQgPgFgJgQQgIAQgSAQgAFtBKIgBgTIAOgBQABAJAAAJIAAAVIgPACIABgVgAGDA2IAMgCQAFAQACAUIgOADQgBgWgEgPgAGhBQIgCgMIgGgQIAMgEQAIAUADAMIgOAFgAmIAVQgNAcghAOIgJgSQATgIAKgKQAMgKADgUIgtAAIAAgTIAuAAIABgYIgpAAIAAgSIAVAAIgGgMIgHgNIARgHQAJAQAFANIABADIAQAAQAHgLAGgPIADgGIARAIIgGANIgGALIAYAAIAAASIgqAAIgBAYIAyAAIAAATIg0AAIgBAHQAMAIAPANIAYAUIgKASQgZgbgVgPgAFNAeIAsgBIAAgOIgkAAIAAgPIAkAAIAAgNIglAAIAAhOIBaAAIAABOIgnAAIAAANIAlAAIAAAPIglAAIAAANIAWgBQAJAAAIgCIAAAPIgtAEQgeAAgTADgAGHgbIAZAAIAAgxIgZAAgAFhgbIAYAAIAAgxIgYAAgAGMglIACgGIACgLIADgOIAJACIgDARQgBAMgCADgAFpgyIgFgOIAJgDIAFANIACANIAAADIgJAEgAneg7QgOgQgKgHIALgNQASAOALAMIgMAPIgEgFg");
	this.shape_2.setTransform(157.8,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(16,0,192.6,23.2), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C22027").s().p("AilBvIAbhKIAfADIgjBJgAC7AzQgSgcAAgmQAAgqASgbQARgcAfAAQAeAAARAcQASAcAAAoQAAAngSAcQgRAdgeAAQgfAAgRgdgADRhAQgKAWAAAaQAAAbAKAVQAJAVARAAQARAAAJgUQAJgTAAgeQAAgcgJgVQgLgVgPAAQgRAAgJAWgAA0AzQgRgcAAgmQAAgqARgbQARgcAfAAQAeAAASAcQARAcAAAoQAAAngRAcQgSAdgeAAQgfAAgRgdgABKhAQgKAWAAAaQAAAbAKAVQAKAVAQAAQARAAAJgUQAKgTAAgeQAAgcgKgVQgKgVgQAAQgQAAgKAWgAhSAzQgRgcAAgmQAAgqARgbQARgcAfAAQAeAAARAcQARAcAAAoQAAAngRAcQgRAdgeAAQgfAAgRgdgAg8hAQgKAWAAAaQAAAbAKAVQAKAVAQAAQARAAAJgUQAJgTAAgeQAAgcgJgVQgKgVgQAAQgQAAgKAWgAkrBLIAvg7QAhgoAFgKQAGgLABgGIAAgEQgBgMgHgJQgJgKgNAAQgNAAgHALQgHAKAAAPIggAAQgBgbARgRQAPgSAcAAQAaAAAQARQASARAAAZQAAAYglApIgfAlIBFAAIAAAag");
	this.shape.setTransform(142.1,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007D7D").s().p("AGIBaIgegFIAIgOIA6AJIgHARIgdgHgAD/BRQAcgDATgGIAIgCIAMANQgbAJgbAEIgFABgABPBhIAAiFIAuAAIAAg9IASAAIAAA9IAyAAIAABtQgBALgDAFQgDAFgLABIgaAAIgEgTIAXABQAGAAABgHIAAgRIhOAAIAAAsgABhAkIBOAAIAAgUIhOAAgABhAAIBOAAIAAgSIhOAAgAh6BQQAZgIALgLQgOgRgKgWIAOgHQAKAUALAOQANgQAGgVIg8AAIAAgRIBNAAIAAAPQgJAggOASQANALARAIIADABIgKARQgQgIgUgQQgSARgWAHgAjLBUQAHgRADgPQACgPABgeIgNAAIAAgRIANAAIAAhBIAVAAIACgKIACgMIARACIgCALIgDAJIAbAAIAACUQAAALgEAFQgDAFgLABIgOAAIgEgTIANAAQAGAAABgGIAAg/IggAAQABAYgDAVQgCAVgLAXgAiugKIAgAAIAAgwIggAAgAAZBQQAPgYANgqIAPAMQgNAugPAYgAEUBFIAAg/IgIACIgJADIgFgRQAdgDAPgPIgoAAIAHglIAtAAIABgLIg2AAIAAgOIA2AAIAAgLIARAAIAAALIAbAAIAAgLIAQAAIAAALIAtAAIAAAlIgtAAIAAALIA3AAQgBAUgDAJQgCAIgJABIgDAAIAABFgAElA3IBhAAIAAgLIhhAAgAElAhIBhAAIAAgLIhhAAgAElAKIBhAAIAAgKIhhAAgAFzgMIAUAAIgCgEIAMACIACAAQAFgBAAgEIABgFIgmAAgAE+gWQgEAFgGAFIAuAAIAAgMIgjAAIgBACgAFDgmIAgAAIAAgLIgcAAgAEVgmIAcAAIADgGIABgFIgdAAgAFzg9IAdAAIAAgLIgdAAgAFIg9IAbAAIAAgLIgbAAgAipAXIANgFQAFAMADASIABADIgOAEQgEgWgEgKgAmrACIAAgWICjAAIAAAWgAApgLIgKgIIgGgDIALgQIAQAJIARAMIgLARgAh8gXQALgKAFgLQAEgLABgZIAAgLIA2AAIAAAtQAAAIABACQACACAGAAIAJAAIAAARIgPAAQgLAAgEgEQgGgGAAgOIAAggIgTAAIAAAHQgBAlgYAVgAilgiIgEgNIANgDIACAEIADAKIAEAPIgPADgACcg0QANgTAHgWIAQAJQgJAbgKARgABOhPIgCgEIAQgJQAKASAHAQIAEAHIgSAKQgHgVgKgRgAAchLIALgRIARAKQAJAGAIAGIgMAUQgXgTgKgGg");
	this.shape_1.setTransform(42.8,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C42329").s().p("AHlBhIAAgPIggAAIAAAPIgRAAIAAhkIAVAAIAAhcIARAAIAAAjIAiAAIAAARIgiAAIAAAoIAbAAIAABkgAHFBCIAgAAIAAg1IggAAgAFPBaQAHgPAEgWIANACIgBAHQgDAUgHAPgAn7BQQAcgVAGggIABgFIgeAAIAAgPIADgDQANgQAMgUIggAAIAAgRIA0AAIAAANQgNAbgMANIAZAAIAAAMIgBAFQgCALgFAOQAKASAPAEQAQAFAlgBQAcAAAZgCIgDAVIguAAQgyAAgPgFQgQgHgIgPQgIAQgSAQgAFuBLIAAgVIANgBQACAKAAAJIAAAVIgPACIAAgUgAGEA2IANgCQAEAQACATIgOAEQgBgWgEgPgAGiBQIgCgLIgGgRIALgDQAJATACAMIgNAGgAmIAWQgNAbghANIgJgSQATgGALgLQAKgKAEgUIgtAAIAAgSIAvAAIAAgZIgqAAIAAgSIAWAAIgGgMIgHgNIARgHQAJAPAGAOIABADIAPAAQAHgLAHgQIABgFIASAHIgHAPIgFAKIAYAAIAAASIgqAAIAAAZIAwAAIAAASIgzAAIgBAHQAMAIAPAMIAYAUIgKATQgZgagVgPgAFPAeIArgBIAAgOIgjAAIAAgPIAjAAIAAgLIglAAIAAhPIBZAAIAABPIgmAAIAAALIAkAAIAAAPIgkAAIAAANIAVgBQAKAAAIgDIAAAQIgtAEQgeAAgSADgAGIgbIAZAAIAAgvIgZAAgAFjgbIAXAAIAAgvIgXAAgAGNglIACgFIACgLIACgNIAKACIgDAQIgCAOgAFqgwIgEgQIAIgCIAFANIACANIABADIgKADgAnfg7QgOgQgIgIIALgMQARAOALANIgMAOIgFgFg");
	this.shape_2.setTransform(141.8,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,192.6,22.7), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRFGQghghAAgwIAAnpQAAgwAhgiQAighAvAAQAvAAAiAhQAiAiAAAwIAAHpQAAAwgiAhQgiAigvAAQgvAAgigig");
	this.shape.setTransform(11.5,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,23,72), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.have();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,181,46), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,156,32), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BALL();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,60,66), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DxQg3gYgag0QgaguAFg0QAEg0Ajg3QApg/BKg6QA+g0BJgaQApgSAwgCQBZAAA4A/QA/BIgeBYQgJAhgYAZQgWAagXANIhRArIgKAFIgsA8QglAsghAVQguAaguAAQgoAAgngTg");
	this.shape.setTransform(28.4,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,56.7,52), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/A/QgagaAAglQAAglAagaQAbgaAkAAQAmAAAaAaQAaAaAAAlQAAAlgaAaQgaAbgmAAQgkAAgbgbg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,18,18), null);


(lib.passport_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADmLZQgggRkTh8IpDkBIgegNQgNgDAKgRIInvwIADgDIAugLQA/gKBSgDQEJgHFuBPQAOAIgPAxQgBAAgXBGIgWBGIAIANQAIATgHAdQgHAdiqIeIiFGoIgjByIgPAZQgLALgQAAQgOAAgSgJg");
	mask.setTransform(70.7,76.1);

	// 圖層 1
	this.instance = new lib.passport();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.passport_1, new cjs.Rectangle(1.3,2.3,138.9,147.7), null);


(lib.mcticket_01_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au4G0QgRgagFgqQgHhDggpVQgCgJAEgKQAJgVAigDIdDhxIAdAGQAdAPACAnQABAnAfEoIAfEgQgCAbgNAbQgbA3g1ADI8/BuQgIgFgIgMg");
	mask.setTransform(101.7,45.9);

	// 圖層 1
	this.instance = new lib.ticket_01();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcticket_01_gray, new cjs.Rectangle(0.3,0.6,202.9,90.5), null);


(lib.mcticket_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au4G0QgRgagFgqQgHhDggpVQgCgJAEgKQAJgVAigDIdDhxIAdAGQAdAPACAnQABAnAfEoIAfEgQgCAbgNAbQgbA3g1ADI8/BuQgIgFgIgMg");
	mask.setTransform(101.7,45.9);

	// 圖層 1
	this.instance = new lib.ticket_01();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcticket_01, new cjs.Rectangle(0.3,0.6,202.9,90.5), null);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007C7C").s().p("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");
	this.shape.setTransform(60.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(2.6,2.9,115.6,12.9), null);


(lib.flight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017C7C").s().p("AAGAGIgaAbIACAVIgLALIgLgYIgZgLIALgLIAWACIAbgbIhFgjIAOgNIBSAVIAlgmQADgDAEAAQADAAADADQADACAAAEQAAAEgDACIgmAmIAVBSIgNAOg");
	this.shape.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flight, new cjs.Rectangle(0,0,14.9,15), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B70000").s().p("AjzHxQiyg4hziSQB1BoCaAhQCeAjCagzQDshNBxjdQBxjdhNjsQghhlhChUQB6BrAzCcQBNDthxDcQhxDejtBNQhcAehcAAQhZAAhagcg");
	this.shape.setTransform(89.7,88.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(36,36,107.4,105.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B70000").s().p("AmcNMQkvhfjDj4QDICxEEA5QEMA6EGhVQDGhACbiHQCWiCBbiyQBaiyARjFQASjMhAjGQg5ishviPQBkBZBKBwQBMBzArCEQBADGgRDMQgRDFhbCyQhaCyiXCCQibCGjFBBQidAzidAAQiYAAiYgwg");
	this.shape.setTransform(127.1,125.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(36,36,182.2,178.4), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2A2A3").ss(3,0,0,4).p("AHApkQBzCHBICUIiqBYQhAibhniOgAFnlgQhuCSi1BnIG+AAIAAJZQAABIgsArQgsAphKAAIsiAAIAApFQgYAFhQAPIhOihQE9guDHhUQBIggAbgQQgbAFgfAAQhDAAg2gYIgcihQA+AcBBAAQAaAAAJgSQAIgYAAgyIAAijICgAAIAADLQAABegWAsQBCgvAxg5gAFjD0IqGAAIAAA5IKGAAgAFjApIqGAAIAAA5IKGAAgAl0pZICZBjQhvC0h4BnIiJh/QCGh4BRiHgAkjH9IJJAAQAmAAAMgPQALgMAAglIqGAAg");
	this.shape.setTransform(63.3,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2A2A3").s().p("AnDKOIAApFIhpAUIhNihQE9guDHhUQBIggAbgQQgcAFgeAAQhDAAg2gYIgcihQA+AcBBAAQAaAAAJgSQAIgYAAgyIAAijICgAAIAADLQAABegXAsQBDgvAxg5ICgBAQhuCSi1BnIG+AAIAAJZQAABIgsArQgsAphKAAgAkkH9IJIAAQAnAAAMgPQAKgMAAglIqFAAgAkkEtIKFAAIAAg5IqFAAgAkkBiIKFAAIAAg5IqFAAgApMlaQCGh4BQiHICaBjQhvC0h4BngAEpoaICWhKQBzCHBICUIirBYQg/ibhniOg");
	this.shape_1.setTransform(63.4,65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnDKOIAApFIhpAUIhNihQE9guDHhUQBIggAbgQQgcAFgeAAQhDAAg2gYIgcihQA+AcBBAAQAaAAAJgSQAIgYAAgyIAAijICgAAIAADLQAABegXAsQBDgvAxg5ICgBAQhuCSi1BnIG+AAIAAJZQAABIgsArQgsAphKAAgAkkH9IJIAAQAnAAAMgPQAKgMAAglIqFAAgAkkEtIKFAAIAAg5IqFAAgAkkBiIKFAAIAAg5IqFAAgApMlaQCGh4BQiHICaBjQhvC0h4BngAEpoaICWhKQBzCHBICUIirBYQg/ibhniOg");
	this.shape_2.setTransform(63.4,65.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(-2.2,-1.5,131,133.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B6A6A").ss(2,1,1).p("ADPA3IiYAAIAACYIhtAAIAAiYIiYAAIAAhtICYAAIAAiYIBtAAIAACYICYAAg");
	this.shape.setTransform(21.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B6A6A").s().p("Ag2DPIAAiYIiYAAIAAhtICYAAIAAiYIBtAAIAACYICYAAIAABtIiYAAIAACYg");
	this.shape_1.setTransform(21.7,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,43.4,43.4), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2A2A3").ss(3,1,1).p("AERjHQgng8gPhvQgBgJgHgFQgGgGgJAAIkEAAQgKAAgHAHQgHAHAAAKIAAA1QgFgGgGgCIhbgdQgJgDgIAEQgJAEgDAJQgYBAgrBFIgBABQgnBFg3A3QgIAHABALQAAAKAJAHIBRBAQAHAHAKgBQAJgBAGgHIAOgPQAGAOAPAAIBJAAQgNBWggAtQg0BGhcAwQgKAGgCALQgCAKAGAJIA3BOQAIAKAMAAQAFAAAGgCQB4hBA+hXQA6hRAOiKICIAAQgEC+gIAWIAAACQgDAJgEADQgCACgHAAIhcAAQgKAAgHAIQgHAIABALIAMBbQABAIAHAHQAGAFAJAAIBmAAQBOAAAig3QAPgRAIg4QALhJAEicIAIAHQAHAGAJAAQAKAAAGgGIBNhKQAIgJgBgLQAAgKgJgHQhBgwgphJgACDiIIkxAAIAAAAQAthMAehQIAAAEQAAAKAHAHQAGAHAKAAICcAAQAWBJAdA3g");
	this.shape.setTransform(40.4,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2A2A3").s().p("AksF9Ig3hOQgGgJACgLQACgKAKgGQBcgvA0hHQAgguANhVIhJAAQgPAAgGgOIgOAPQgGAHgJABQgKAAgHgGIhRg/QgJgIAAgKQgBgLAIgHQA3g3AnhFIAAgBQAshEAYhBQADgIAJgEQAIgFAJADIBbAdQAGACAFAGIAAg1QAAgKAHgHQAHgHAKAAIEEAAQAJAAAGAGQAHAGABAIQAPBvAnA8IABACQApBIBBAwQAJAHAAALQABAKgIAJIhNBJQgGAHgKAAQgKABgGgHIgIgHQgECcgLBJQgIA4gPARQgiA3hOAAIhmAAQgJAAgGgFQgHgGgBgKIgMhaQgBgLAGgHQAIgJAJAAIBdAAQAHAAACgCQAEgDACgKIAAgBQAJgWAEi+IiIAAQgOCKg6BRQg+BXh4BBQgGACgFAAQgMAAgIgKgACDiIQgeg2gVhKIicAAQgKABgGgIQgIgHABgJIAAgFQgeBQgtBMIAAAAIExAAIAAAAg");
	this.shape_1.setTransform(40.4,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,80.8,81.2), null);


(lib.change = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(75.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.change, new cjs.Rectangle(0,0,153.8,26.9), null);


(lib.期0利率 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("AgqBtIgFgWIAiABQAIAAAAgHIAAgLIhoAAIAAgVIBoAAIAAgJIAwgNIiGAAIAAgVICwAAIAAATQgcAOggAKIBVAAIAAAVIhcAAIAAAMQAAARgFAFQgGAFgPAAgAhTgEIAAg2ICoAAIAAA2gAg7gXIB4AAIAAgRIh4AAgAhrhGIAAgVIBbAAIgIgOIAagDIAJARIBhAAIAAAVg");
	this.shape.setTransform(-5,21);

	this.instance = new lib.Symbol33fewfewfw();
	this.instance.parent = this;
	this.instance.setTransform(18.8,21.2,1.029,1.029,0,0,0,10.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#127265").s().p("AE0BzIAAgtIhhAAIAAgVIBhAAIAAgTIgjACIgGgUIAQAAQAPgJAPgPIAFgEIgqABIgFgSIALAAQAPgQAIgOIACgDIhZAAIAAgUIBYAAIgIgQIAXgDIAGAJIAFAKIBaAAIAAAUIhdAAQgGAMgNARIgEAEIAagBQAFgHAIgNIABgBIASAHQgUAigiAZIAUgBQAKAAAIgCIgHgPIARgGQAMAVAGATIADAHIgUAGIgFgPIgXADIAAAVIBjAAIAAAVIhjAAIAAAtgAAWBzIAAhhQgSAigXAYIgKgXQAbgZAUgsIgsAAIAAgWIAwAAIAAgeIgDAAQgOACgSACIgEAAIgFgXQA7gDAkgMIAKAVQgRAFgRADIgFACIAAAhIAqAAIAAAWIgqAAIAAAFQATAQATAUIAHAHIgOAUIgRgXIgOgQIAABmgAlMBjQAegjAAhHIAAhYIBVAAIAAC6QAAAWgTgBIgbAAIgGgWIAaABQAFAAAAgFIAAguIgtAAQgFAlgbAmgAkZATIArAAIAAglIgrAAgAkZgnIArAAIAAgiIgrAAgAmtBiQATgPAPgbIASAIIgFAJQgLAUgSATgAB1BvIgFgXIAlABQAIAAAAgIIAAi6IAXAAIAAC/QAAAOgGAGQgGAGgPgBgAluBAIAQgIIAEADQAIAIALAQIACACIgSANQgKgSgNgQgAivA7QgSgdAAgqQAAgrATgeQASgdAgAAQAgAAATAeQASAeAAAqQAAApgSAeQgTAfggAAQggAAgTgfgAiXg/QgKAXAAAcQAAAcAKAXQAKAXARAAQASAAAKgWQAJgVAAgfQAAgdgKgXQgKgXgRAAQgRAAgKAYgABlA+IAAiXIAXAAIAACXgAmtA0IAAgSIAUAAIAAhgIgPAAIAAgSIAPAAIAAgYIAVAAIAAAYIAnAAIAAgYIAVAAIAAAYIAQAAIAAASIgQAAIAABgIAOAAIAAASgAmEAiIAnAAIAAgXIgnAAgAmEgFIAnAAIAAgVIgnAAgAmEgrIAnAAIAAgTIgnAAgADYARQAbgMAXgTIAHATQgPAOggARgAGIARIgVgQIANgPIAXAPQAJAHALAJIgPARIgUgRgAFtgiQASgJAVgSIAMAPQgRAQgWAOgADughIgSgOIAOgOIARAMIATAPIgPARg");
	this.shape_1.setTransform(74,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.期0利率, new cjs.Rectangle(-16,9.1,133.1,23), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(32.8,11.1,1,1,0,0,0,10.7,11.1);

	this.instance_1 = new lib.Symbol31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,11.1,1,1,0,0,0,11,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,43.4,22.1), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(38.5,38.9,0.788,0.788,0,0,0,28.4,25.9);
	this.instance.alpha = 0.879;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 128, 102, 26, 0), new cjs.BlurFilter(7.1171875, 7.1171875, 1)];
	this.instance.cache(-2,-2,61,56);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnDKOIAApFQgnAJhBAKIhOigQE4gsDMhWQBIgfAbgQQgbAEgfAAQhDAAg2gYIgcihQA9AcBCAAQAbAAAIgSQAIgWAAg0IAAijICgAAIAADLQAABfgWArQBBgwAyg4ICgBAQhvCTi0BlIG+AAIAAJaQAABIgsAqQgsAqhKAAgAkkH9IJIAAQAnAAAMgPQALgMAAgkIqGAAgAkkEuIKGAAIAAg6IqGAAgAkkBiIKGAAIAAg5IqGAAgApMlaQCHh5BQiGICZBjQhvC0h4BngAEpoaICWhJQBzCGBICUIiqBYQg/iahoiPg");
	this.shape.setTransform(85.3,89.3,0.764,0.764);

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.2,91.6,0.764,0.764,0,0,0,63.4,65.3);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.3,95.8,0.764,0.764,0,0,0,127.5,125);
	this.instance_2.alpha = 0.301;
	this.instance_2.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_2.cache(34,34,186,182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FD0000","#CA0000"],[0.749,1],-17.1,-19.4,0,-17.1,-19.4,105.6).s().p("Ag8RZQjigNjKhjQjDhfiSiiQiRijhKjMQhMjTANjiQAMjiBjjKQBfjDCjiSQCiiRDMhKQDUhMDhAMQDiANDKBjQDDBfCSCjQCRCiBKDMQBMDUgMDhQgNDjhjDKQhfDDijCRQiiCRjMBKQi2BCjBAAQgfAAgfgCg");
	this.shape_1.setTransform(85.2,85.2,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,172.4,173.7), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(28,29.9,0.612,0.612,0,0,0,28.4,26);
	this.instance.alpha = 0.801;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 128, 102, 26, 0), new cjs.BlurFilter(10.34375, 10.34375, 1)];
	this.instance.cache(-2,-2,61,56);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008872").s().p("AlQEhQBigzA2hLQApg6AMhuIhkAAIAAg4QgYAigcAeIhRhAQA3g2ArhLQAthGAYhDIBbAdQgeBSgvBPIgWAlIGGAAQgEgGgHgMQgmg+gahgIiuAAIAAhaIEEAAQAQBzApBBQArBMBFA0IhMBKQgegYgRgVQgEE3geAiQgbAshCAAIhnAAIgLhaIBcAAQAeAAAIggQAJgbAGjYIi3AAQgLCRg6BSQg7BUhzA9g");
	this.shape.setTransform(53.9,54.9,0.815,0.815);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhRl/QgHAHAAAKIAAA1QgEgFgIgDIhagdQgJgDgJAFQgIAEgEAJQgWA9gsBHIgBABQgqBJg0AzQgIAIABAKQABALAIAHIBRA/QAHAGAJAAQAKgBAGgHIANgPQAHAOAPAAIBJAAQgMBUghAvQgyBFheAyQgJAEgDALQgDALAHAJIA3BOQAIAKAMAAQAGAAAFgDQB3g/A/hZQA6hSAOiIICIAAQgFC4gHAdIgBABQgDAJgDADQgDACgGAAIhdAAQgKAAgHAIQgHAIACALIAMBbQABAIAHAGQAGAGAIAAIBnAAQBNAAAjg2QAPgTAIg4QALhJADibIAJAHQAHAGAJAAQAJAAAHgHIBNhKQAIgHgBgLQgBgLgJgHQhAgvgqhKIAAgBQgng8gPhuQgBgJgHgGQgHgGgJAAIkDAAQgKAAgHAHgAiih9QAshKAehRIAAAEQAAAKAHAHQAHAHAKAAICcAAQAVBIAeA4IkyAAg");
	this.shape_1.setTransform(53.9,54.9,0.815,0.815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AksF9Ig3hOQgHgJADgLQADgLAJgEQBegyAyhFQAhgvAMhUIhJAAQgPAAgHgOIgNAPQgGAHgKABQgJAAgHgGIhRg/QgIgHgBgLQgBgKAIgIQA0gzAqhJIABgBQAshHAWg9QAEgJAIgEQAJgFAJADIBaAdQAIADAEAFIAAg1QAAgKAHgHQAHgHAKAAIEDAAQAJAAAHAGQAHAGABAJQAPBuAnA8IAAABQAqBKBAAvQAJAHABALQABALgIAHIhNBKQgHAHgJAAQgJAAgHgGIgJgHQgDCbgLBJQgIA4gPATQgjA2hNAAIhnAAQgIAAgGgGQgHgGgBgIIgMhbQgCgLAHgIQAHgIAKAAIBdAAQAGAAADgCQADgDADgJIABgBQAHgdAFi4IiIAAQgOCIg6BSQg/BZh3A/QgFADgGAAQgMAAgIgKgACPh8Qgeg4gVhIIicAAQgKAAgHgHQgHgHAAgKIAAgEQgeBRgsBKIgBABIEyAAIAAAAg");
	this.shape_2.setTransform(53.9,54.9,0.815,0.815);

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.1,57.1,0.815,0.815,0,0,0,40.3,40.6);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.3,60.3,0.815,0.815,0,0,0,89.8,89.1);
	this.instance_2.alpha = 0.301;
	this.instance_2.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_2.cache(34,34,111,109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FD0000","#CA0000"],[0.749,1],-10,-11.4,0,-10,-11.4,62.1).s().p("AgjKPQkPgPi2jKQi1jKAPkPQAPkPDKi2QDLi1EOAPQEPAPC2DKQC1DLgPEOQgOEQjLC1Qi7Cnj2AAIgogBg");
	this.shape_3.setTransform(53.5,53.5,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,111.5,111), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(36));

	// Layer 4
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(110.9,112.3,1.777,1.777,0,0,0,108,11.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:0.89,scaleY:0.89,x:111},5).to({scaleX:1.03,scaleY:1.03},2).to({scaleX:1,scaleY:1},1).wait(37));

	// Layer 3
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.8,70.5,1.986,1.986,0,0,0,96.3,11.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regY:11.5,scaleX:0.89,scaleY:0.89,x:115.7,y:70.7},5).to({regY:11.3,scaleX:1.03,scaleY:1.03,y:70.5},2).to({scaleX:1,scaleY:1},1).wait(49));

	// Layer 1
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-140.2,24,1,1,0,0,0,96.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:110.8},5).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.6,0,452.2,152.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApwCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIThAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");
	mask.setTransform(78.4,16.5);

	// Layer 3
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,12.5,1,1,18.2,0,0,11.6,36);
	this.instance.alpha = 0.57;
	this.instance.filters = [new cjs.BlurFilter(16.28125, 16.28125, 1)];
	this.instance.cache(-2,-2,27,76);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.5,regY:36.1,x:118.3,y:12.6},4).to({regY:36,x:177.4,y:12.5},14).wait(2));

	// Layer 1
	this.instance_1 = new lib.立即申辦();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.8,16.9,0.9,1,0,0,0,40.9,-5.9);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78,16,1,1,0,0,0,78,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,32);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(101.9,102.8,1,1,0,0,0,85.2,85.2);

	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.8,135.5,1,1,0,0,0,53.5,53.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2DPIAAiYIiYAAIAAhtICYAAIAAiYIBtAAIAACYICYAAIAABtIiYAAIAACYg");
	this.shape.setTransform(178.2,188.9,0.657,0.657);

	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.1,189.5,0.657,0.657,0,0,0,21.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00836E").s().p("AqYKZQkTkTAAmGQAAmFETkTQETkTGFAAQGGAAETETQETETAAGFQAAGGkTETQkTETmGAAQmFAAkTkTg");
	this.shape_1.setTransform(178,188,0.289,0.289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00836E").s().p("AqYKZQkTkTAAmGQAAmFETkTQETkTGFAAQGGAAETETQETETAAGFQAAGGkTETQkTETmGAAQmFAAkTkTg");
	this.shape_2.setTransform(241.2,135.3,0.694,0.694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00836E").s().p("AqYKZQkTkTAAmGQAAmFETkTQETkTGFAAQGGAAETETQETETAAGFQAAGGkTETQkTETmGAAQmFAAkTkTg");
	this.shape_3.setTransform(101.4,101.9,1.086,1.086,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.7,-0.4,307.2,215.6), null);


(lib.mc_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(176.4,30.2,0.28,0.28,0,0,0,152.8,107.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00836E").s().p("AgKBSIAAgaIAXAAIAAAagAgIAlIgEh2IAZAAIgDB2g");
	this.shape.setTransform(248.9,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00836E").s().p("AA3BBQgOAUgUAMIgKgRQAWgLAMgTQgJgUgIgpIgFAJIgEAFIgKgRQAVgfAEgzIASADQgBASgEANIAwAAIAAARIgMAAQgEA5gOAlQAAACAJAKQAKAKANAJIgMARQgPgMgPgUgAAngiIAFAYQAEAVAGARQAJgcADgtIgXAAIgEALgAgRBZIgNgGQgXAOgfAAIgCAAIgIgQIAIABQAYAAAOgHQgKgFgVgIIANgPIgbAAIAAgOIAmAAQAEgFACgFIghAAIAAgkIAlAAIAAgKIgmAAIAAgYIgNAAIAAgOIANAAIAAgYIAmAAIAAgLIARAAIAAALIAkAAIAAAYIALAAIAAAOIgLAAIAAAYIgkAAIAAAKIAlAAIAAAkIgoAAIgFAKIA3AAIAAAOIgQAAQgHAQgMAJIAMAFIAKAEIgJAQIgOgIgAg3A4IALAFIAMAEQAIgFAJgNIggAAIgIAJgAgcAKIAWAAIAAgKIgWAAgAhCAKIAVAAIAAgKIgVAAgAgcgkIAVAAIAAgLIgVAAgAhCgkIAVAAIAAgLIgVAAgAgcg9IAVAAIAAgLIgVAAgAhCg9IAVAAIAAgLIgVAAg");
	this.shape_1.setTransform(230,72.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00836E").s().p("ABHBhIAAgPIgkAAIAAAPIgSAAIAAhlIAXAAIAAhcIATAAIAAAkIAlAAIAAARIglAAIAAAnIAeAAIAABlgAAjBBIAkAAIAAg1IgkAAgAhfBaQAIgPAEgXIAPACQgEAagIAQgAg8BKIgBgUIAPgBQACAPAAAQIAAAJIgRABIABgUgAgkA2IAOgCQAEAOADAVIgPAEQgCgUgEgRgAgLAzIALgDQAGALAGAUIgNAGQgDgOgHgUgAhfAeIAUgBIAcAAIAAgOIgnAAIAAgPIAnAAIAAgMIgpAAIAAhOIBiAAIAABOIgpAAIAAAMIAnAAIAAAPIgnAAIAAANIAYgCIARgCIAAAQQg4AFguACgAgfgbIAbAAIAAgwIgbAAgAhJgbIAaAAIAAgwIgaAAgAgaglQAFgMACgSIALADQgDASgDAMgAhFhAIAJgCQAGAPACAOIgLADQgDgSgDgMg");
	this.shape_2.setTransform(211,72.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00836E").s().p("AguBhIAAhVQgQAfgVATIgJgUQAbgXAQglIgoAAIAAgTIArAAIAAgaQgOADgVAAIgEgUQA1gBAfgLIAIARQgQAGgSADIAAAdIAlAAIAAATIglAAIAAAFQATANAVAZIgNARQgRgZgKgJIAABZgAAmBdIgGgVIAiABQAGAAAAgGIAAijIAVAAIAAClQgBAPgFAEQgEAFgPAAgAAXAzIAAiEIAUAAIAACEg");
	this.shape_3.setTransform(191.6,72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00836E").s().p("AhgBaQALgYABgZIARACQgBAfgJAVgAg2BUQAAgWgDgUIARgBQAEAQACAZIgUAEIAAgCgAgMBVIAAgQIgIACQgDgOgGgRIAPgDQAFAKAGAUIAlAAIAAiBIgpAAIAAgTIBmAAIAAATIgoAAIAACBIAqAAIAAASgAgTAYQgkAHgiACIgGgTIAIABIAIgBQAVgXAIgNIgoADIgEgSIAGAAIACAAQASgbAKgeIAUAFQgMAdgQAWIALgBIAPgBQAGgIAHgPIASAHQgYAtgXAYIAfgEQgDgJgEgEIAQgDQAJANAHAXIgQAEQgBgJgCAAg");
	this.shape_4.setTransform(173,72.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00836E").s().p("AhQBhIAAg4IgPAAIAAgQIAPAAIAAgJIASAAIAAAJIA2AAIAAgMIhAAAIAAhCIAaAAIAAgLIgwAAIAAgRIAwAAIAAgPIATAAIAAAPIAYAAIAAARIgYAAIAAALIA4AAIAAgLIgXAAIAAgRIAXAAIAAgPIATAAIAAAPIAwAAIAAARIgwAAIAAALIAbAAIAABCIhBAAIAAAMIBPAAIAAAzQAAARgOAAIgUAAIgDgQIgJAEIgFgJIhYAHIgDgRQAVAAAYgCIAAgTIg2AAIAAA4gAAzA5IAJARIgHADIANAAQAFAAAAgFIAAgfIgdAAIggAAIAAASIAWgCIgGgKIAQgGIAJAQgAAKgBIAuAAIAAgMIguAAgAg1gBIAtAAIAAgMIgtAAgAAKgaIAuAAIAAgMIguAAgAg1gaIAtAAIAAgMIgtAAg");
	this.shape_5.setTransform(154,72.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00836E").s().p("AA8BdIAAgNIh1AAIAAANIgUAAIAAiLIA+AAQAGgPACgMIhZAAIAAgTIDBAAIAAATIhUAAQgCAOgFANIBLAAIAACLgAg5A8IB1AAIAAgkIh1AAgAg5AFIB1AAIAAgfIh1AAg");
	this.shape_6.setTransform(135,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00836E").s().p("ABLBhIAAgLIhNAAIAAALIgSAAIAAigIAvAAIAAghIASAAIAAAhIAwAAIAACggAAtBFIAeAAIAAg2IgeAAgAgCBFIAdAAIAAg2IgdAAgAAtAAIAeAAIAAguIgeAAgAgCAAIAdAAIAAguIgdAAgAhWBfIgFgUIARABQAGAAAAgGIAAgvQgKAEgLACIgDgTIAYgGIAAgrIgYAAIAAgSIAYAAIAAgnIATAAIAAAnIATAAIAAASIgTAAIAAAlIASgJIACASIgUAJIAAA3QAAAPgFAEQgEAFgOAAg");
	this.shape_7.setTransform(115.7,72.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00836E").s().p("AhMBcIAAg0IgUAAIAAgSIAUAAIAAhNIBEAAIAAgSIhVAAIAAgSIC8AAIAAASIhVAAIAAASIBFAAIAABNIASAAIAAASIgSAAIAAAaQAAAOgFAFQgFAFgOAAIgbAAIgFgTIAeABQAHAAAAgGIAAgaIh1AAIAAA0gAAKAWIAyAAIAAgVIgyAAgAg5AWIAxAAIAAgVIgxAAgAAKgRIAyAAIAAgTIgyAAgAg5gRIAxAAIAAgTIgxAAg");
	this.shape_8.setTransform(97,72.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00836E").s().p("AALBQIAAAFQgaAEhMAEIgDgRIAaAAIAXgBIAAgQIgnAAIAAgOIAnAAIAAgNIgpAAIAAhCIApAAIAAgMIgyAAIAAgPIAyAAIAAgOIgRABIgVABIgGgQIAFAAQA+AAAagGIAJANQgNAEgbADIAAAOIAuAAIAAAFIAZAAIAAglIARAAIAAAlIAjAAQgBBsgBAPQgCAPgFAGQgFAIgVgBIgIAAIgIgUIASABQAIABACgHQADgGABggIABhHIgRAAQgCBSggA1gAALBPQAdgmADhQIgaAAIAAgHIgsAAIAAAMIApAAIAABCIgpAAIAAANIAmAAIAAAOIgmAAIAAAPIAmgFgAgbATIAYAAIAAgPIgYAAgAhEATIAXAAIAAgPIgXAAgAgbgHIAYAAIAAgOIgYAAgAhEgHIAXAAIAAgOIgXAAg");
	this.shape_9.setTransform(69.5,72.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00836E").s().p("ABCBeIAAgNIhNAAIAAANIgVAAIAAhVIAwAAIAAgdIg8AAIAAgSIA8AAIAAgcQgQACgdAAIgEgSIAIAAQA4AAAtgLIALAQQgWAGgdAEIAAAdIA8AAIAAASIg8AAIAAAdIAyAAIAABVgAgLBAIBNAAIAAglIhNAAgAheBMQASgXATgoIAQAOQgTAtgSAVgAhfgXIAMgQQAYAMANAJIgNASQgUgNgQgKgAhbhLIANgQQAZANAMAIIgNAUQgUgPgRgKg");
	this.shape_10.setTransform(50.5,72.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00836E").s().p("AgkBgIgFgTIAeAAQAHAAAAgGIAAgJIhcAAIAAgTIBcAAIAAgIIApgLIh1AAIAAgSICaAAIAAAQQgYANgcAIIBLAAIAAATIhRAAIAAAKQAAAOgEAFQgFAFgNAAgAhJgDIAAgvICUAAIAAAvgAgzgTIBpAAIAAgPIhpAAgAhdg9IAAgSIBQAAIgHgNIAWgDQAEAGAEAKIBVAAIAAASg");
	this.shape_11.setTransform(31.5,72);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00836E").s().p("AhWBNQAcgNAQgWQAQgXACgUIgiAAIAAgTIB7ABQgCA4gDAUQgDAUgHAHQgIAHgeAAIgLAAIgFgUIAZABQAPAAADgKQAFgQAAgvIgvAAQgJBAg9AggAhggRQAqgjAQgqIASAJQgTAygrAjgABBgTQgRgVgRghIgnAAIAAgTIAyAAQAUApAjAgIgRAQIgPgQgABBgTg");
	this.shape_12.setTransform(12.5,72.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00836E").s().p("AhbBOQATgbAAgwIAAhfICkAAIAACeQAAAPgEAEQgEAFgQAAIgXAAIgFgUIAZABQAHAAAAgGIAAgmIg1AAIAAA8IgTAAIAAg8Ig1AAQgCAhgTAhgAASAKIA2AAIAAghIg2AAgAg0AKIAzAAIAAghIgzAAgAASgpIA2AAIAAggIg2AAgAg0gpIAzAAIAAggIgzAAg");
	this.shape_13.setTransform(116.2,40.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00836E").s().p("AgZBhIAAhhIhHAAIAAgUIBHAAIAAhMIAVAAIAAAaIBVAAIAAAUIhVAAIAAAeIBlAAIAAAUIhlAAIAABhgAADAcIAMgOQAtAWAeAWIgNASQgfgXgrgZg");
	this.shape_14.setTransform(97.5,40.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00836E").s().p("ABHBhIAAgLIhXAAIAAALIgSAAIAAhHIB7AAIAABHgAgQBFIBXAAIAAgaIhXAAgAhHBhIAAhyQgEAJgNAPIgIgUQAdgiAMgxIARAHQgHAYgHAQIAACSgAgeAJIAAgQIB0AAIAAAQgAgegWIAAgRIB0AAIAAARgAgpg2IAAgRIA6AAIgJgWIATgDQAFAKAEAPIA9AAIAAARg");
	this.shape_15.setTransform(78.5,40.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00836E").s().p("AgKBhIAAhCIhMAAIAAhcIBMAAIAAgjIAUAAIAAAjIBNAAIAABcIhNAAIAABCgAAKAMIA4AAIAAg2Ig4AAgAhBAMIA3AAIAAg2Ig3AAg");
	this.shape_16.setTransform(59.5,40.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00836E").s().p("AgZBhIAAhbIgPAAIAABOIgRAAIAAheIAgAAIAAgVIgkAAIAAASQAAA8gQAwIgQgQQAOgpAAhFIAAg6IBlAAIAAA6IgdAAIAAAVIAeAAIAABJIAAADQAAAQgPAAIAAAAIgKAAIgDgTIAJAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAg2IgOAAIAABbgAg9gwIBBAAIAAgYIhBAAgAAvBdIgFgVIAaABQAHAAAAgGIAAijIATAAIAAClQAAAPgFAEQgFAFgOAAgAAlAzIAAiDIATAAIAACDg");
	this.shape_17.setTransform(40.3,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_text, new cjs.Rectangle(0,0,259.7,84.6), null);


(lib.mc_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.期0利率();
	this.instance.parent = this;
	this.instance.setTransform(162.2,27,1.288,1.288,0,0,0,62.4,20.6);

	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,24.8,0.462,0.462,0,0,0,53.5,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_t2, new cjs.Rectangle(-0.1,0,232.6,56.9), null);


(lib.紅利折抵 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(67.7,14.1,1,1,0,0,0,21.7,11.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#127265").s().p("AF4BuIAAh3IgqAAIAAAGQAAApgHAYQgGAXgTAZIgUgQQARgVAGgVQAGgVAAgmIAAhTQBEgDAkgNIALAWQglAKg3AFIAAAnIBkAAIAAAVIgkAAIAAB3gAl9BuIAAhhQgRAjgYAXIgKgXQAbgZAVgrIgtAAIAAgXIAwAAIAAgdIgCAAQgPACgSABIgEAAIgGgWQA9gDAkgMIAJAUQgQAGgRACIgFACIAAAhIAqAAIAAAXIgqAAIAAAEQATAQASAUIAIAIIgOATIgSgWIgNgQIAABlgAG5BtIgGgXIATABQAHAAAAgHIAAg2IgaAHIgFgWIAfgGIAAgxIgeAAIAAgUIAeAAIAAgtIAWAAIAAAtIAZAAIAAAUIgZAAIAAArIAagJIAAATIgDACQgMAFgLADIAABBQAAAOgEAGQgGAFgRAAgADhBtIgGgXIAWAAQAIAAAAgHIAAgxIgOADIgQACIgEgYIACAAIAFgBIALgBIAQgCIAAgxIggAAIAAgVIAgAAIAAguIAXAAIAAAuIAcAAIAAAVIgcAAIAAAsIAcgGIAAAWIgPAEIgNAEIAAA6QgBANgEAGQgEAGgSAAgAqIBmQAJgaADgUIAAgJIATACQgBAmgKAWgAkdBrIgGgYIAlABQAIAAAAgHIAAi6IAYAAIAAC/QAAAOgHAFQgFAGgPAAgAIABlIAAgVIBcAAIAAAVgApaBLQAAgNgDgNIATgCQADANABAMIADAVIgWAGIgBgYgAoqBiIAAgSIgKABIAAgEIgIgaIgBgGIASgCIAGAQIAFARIArAAIAAiTIgvAAIAAgWIB0AAIAAAWIgtAAIAACTIAwAAIAAAWgAJVBDQgQgbgJg3IghAAIAAA3IAUgFIAOgGIADAWQgcAMgvAHIgFgXIAVgDIAAiHIAFAAQBIAAAkgNIAMAUQgbAHgRACIgJACIACAlIA3AAIAAAVIg0AAQAGAiAJAYQAKAWAHAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQABgCAAgMIAAgRIAAgEIATAOIAAAKQgDApgUAAQgOAAgQgbgAIbgkIAfAAIAAgkIgDAAIgPACIgNAAgADZBaIABAAIgBABgAktA5IAAiWIAXAAIAACWgAqHARIAIAAIAJgBQAbgfAFgLIgsAFIgFgWIAGABIADgBQASgcALgfIADgGIAXAGIgFAJQgNAegPAUIAegCQAEgGAEgIIAHgNIAVAIQgdA1gZAaIAjgFIgEgJIgDgFIARgEQALAQAGAUIADAFIgUAFIgBgFIgCgFIgHABQggAFghADIgHABg");
	this.shape.setTransform(67.7,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.紅利折抵, new cjs.Rectangle(0,0,133.7,34.6), null);


(lib.mc_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.紅利折抵();
	this.instance.parent = this;
	this.instance.setTransform(147.2,27.2,1.315,1.315,0,0,0,67.7,14);

	this.instance_1 = new lib.Symbol29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.9,24.9,0.293,0.293,0,0,0,85.1,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_t1, new cjs.Rectangle(0,0,232.6,57.1), null);


// stage content:
(lib.chinatrsut2011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// warning
	this.instance = new lib.footer();
	this.instance.parent = this;
	this.instance.setTransform(232.5,234,1,1,0,0,0,60.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(337));

	// CFA
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,183.6,1,1,0,0,0,78,16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(276).to({_off:false},0).wait(61));

	// ending
	this.instance_2 = new lib.Symbol23("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.3,92.6,1,1,0,0,0,110.9,62.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(242).to({_off:false},0).wait(95));

	// 圖層_4
	this.instance_3 = new lib.mc_card();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.4,160.4,1,1,0,0,0,29.5,47);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).wait(1).to({x:101.7},0).wait(1).to({x:123.1},0).wait(1).to({x:138.5},0).wait(1).to({x:147.9},0).wait(1).to({x:151.4},0).wait(29).to({x:333.4},3).wait(96));

	// 圖層_5
	this.instance_4 = new lib.mc_text();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.8,-15.5,1,1,0,0,0,129.8,42.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200).to({_off:false},0).to({y:61.5},3).wait(1).to({y:58.5},0).wait(34).to({y:-42.5},3).wait(96));

	// t3
	this.instance_5 = new lib.紅利折抵先省錢再享分期0利率();
	this.instance_5.parent = this;
	this.instance_5.setTransform(128,235.6,1,1,0,0,0,85.7,11.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(152).to({_off:false},0).to({y:171.6},3).to({y:180.6},1).to({y:177.6},1).wait(37).to({y:174.6},2).to({y:280.6},3).wait(138));

	// 省+分
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(113.7,76.4,0.076,0.076,0,0,0,153.2,107.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).wait(1).to({regX:152.9,regY:107.4,scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:113.6,y:76.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:76.2},0).wait(1).to({regX:153.1,regY:108,scaleX:0.59,scaleY:0.59,x:113.7,y:76.5},0).wait(1).to({regX:152.9,regY:107.4,scaleX:0.54,scaleY:0.54,x:113.5,y:76.1},0).wait(1).to({regX:153.1,regY:108,scaleX:0.53,scaleY:0.53,x:113.7,y:76.4},0).to({scaleX:0.56,scaleY:0.56},1,cjs.Ease.get(-1)).wait(43).to({y:79.4},2).to({y:-63.6},3).wait(138));

	// mark
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(148.5,-70.5,1,1,0,0,0,30,33);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).wait(1).to({x:152.5,y:-64},0).wait(1).to({x:164.6,y:-44.5},0).wait(1).to({x:184.8,y:-12.1},0).wait(1).to({x:213.1,y:33.2},0).wait(1).to({x:249.5,y:91.5},0).to({x:248.5,y:90.5},1,cjs.Ease.get(1)).wait(51).to({x:244.5},2).to({x:348.5},3).wait(138));

	// shadow
	this.instance_8 = new lib.shadow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(272.4,119.8,0.779,0.779,0,0,0,8.9,8.9);
	this.instance_8.alpha = 0.199;
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_8.cache(-2,-2,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140).to({_off:false},0).to({regX:9,regY:9,scaleX:2.23,scaleY:2.23,x:272.5,y:120,alpha:0.301},2).wait(52).to({x:268.5},2).to({regX:9.1,x:371.7},3).wait(138));

	// passport
	this.instance_9 = new lib.passport_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-83,201.4,1,1,0,0,0,70.5,75.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(132).to({_off:false},0).to({x:107},2).to({x:242},1).wait(59).to({x:238},2).to({x:342},3).to({_off:true},1).wait(137));

	// ticket_02
	this.instance_10 = new lib.mc_ticket_02();
	this.instance_10.parent = this;
	this.instance_10.setTransform(147.9,165.9,1,1,0,0,0,94,93.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).to({rotation:-9.5,x:261.3,y:184.4},1).wait(59).to({x:257.3},2).to({x:361.3},3).to({_off:true},1).wait(137));

	// t2
	this.instance_11 = new lib.mc_t2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-119.3,74.9,1,1,0,0,0,116.3,24.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({x:146.7},3).wait(1).to({x:148.7},0).wait(1).to({x:146.7},0).wait(25).to({x:419.7},4).wait(205));

	// t1
	this.instance_12 = new lib.mc_t1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-123.5,74.6,1,1,0,0,0,116.3,24.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(63).to({_off:false},0).to({x:146.5},3).wait(1).to({x:147.5},0).wait(1).to({x:146.5},0).wait(25).to({x:426.5},4).wait(240));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_62 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_63 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_64 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAGAGg");
	var mask_graphics_65 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAGAGg");
	var mask_graphics_66 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_97 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_98 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_99 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_100 = new cjs.Graphics().p("AO2REMgi/AAAIAAx9MAoTAAAIlASHQAAAEAFAGg");
	var mask_graphics_101 = new cjs.Graphics().p("AQfREMgi/AAAIAAx9MAoTAAAIlASHQAAAEAGAGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_62,x:-78,y:111.3}).wait(1).to({graphics:mask_graphics_63,x:-46.7,y:111.3}).wait(1).to({graphics:mask_graphics_64,x:-15.5,y:111.3}).wait(1).to({graphics:mask_graphics_65,x:15.8,y:111.3}).wait(1).to({graphics:mask_graphics_66,x:47,y:111.3}).wait(31).to({graphics:mask_graphics_97,x:47,y:111.3}).wait(1).to({graphics:mask_graphics_98,x:72.8,y:111.3}).wait(1).to({graphics:mask_graphics_99,x:98.5,y:111.3}).wait(1).to({graphics:mask_graphics_100,x:124.3,y:111.3}).wait(1).to({graphics:mask_graphics_101,x:139.5,y:111.3}).wait(236));

	// ticket_01_color
	this.instance_13 = new lib.mcticket_01();
	this.instance_13.parent = this;
	this.instance_13.setTransform(50.5,199.4,1,1,0,0,0,0,88.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(62).to({_off:false},0).wait(70).to({regX:0.1,rotation:-48,x:106,y:278.3},2).to({_off:true},1).wait(202));

	// 你有中信卡嗎
	this.instance_14 = new lib.Symbol10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(153.5,-50,1,1,0,0,0,90.5,23);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).wait(1).to({x:153.6,y:-42.7},0).wait(1).to({x:154,y:-21},0).wait(1).to({x:154.6,y:15.3},0).wait(1).to({x:155.5,y:66},0).wait(1).to({y:61.5},0).wait(1).to({y:60},0).wait(30).to({y:40,alpha:0},3).to({_off:true},75).wait(203));

	// ticket_01-gray
	this.instance_15 = new lib.mcticket_01_gray();
	this.instance_15.parent = this;
	this.instance_15.setTransform(50.6,176.8,1,1,-46.2,0,0,0.1,88.5);
	this.instance_15.alpha = 0.398;
	this.instance_15._off = true;
	this.instance_15.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance_15.cache(-2,-1,207,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).to({regX:0,rotation:0,x:50.5,y:176.9,alpha:1},3).wait(1).to({regX:0.1,rotation:0.9,x:50.7},0).wait(1).to({regX:0,rotation:0,x:50.5},0).wait(35).to({y:199.4},3).to({_off:true},74).wait(203));

	// 想出國旅遊
	this.instance_16 = new lib.change();
	this.instance_16.parent = this;
	this.instance_16.setTransform(133.9,208.5,1,1,0,0,0,56.4,11);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).to({y:194.5,alpha:1},3).to({y:200.5},1).to({y:198.5},1).wait(26).to({y:208.5,alpha:0},2).wait(279));

	// 飛機
	this.instance_17 = new lib.flight();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-131.2,292,13.613,13.613,18.9,0,0,7.4,7.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).to({regY:7.4,x:400.2,y:32.8},13).wait(321));

	// bg
	this.instance_18 = new lib.bg();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,0,50.011,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(337));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.1,250);
// library properties:
lib.properties = {
	id: 'E093E0C986F3AC4FBD8496AC386B8BE8',
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/chinatrsut_2011_atlas_.png", id:"chinatrsut_2011_atlas_"}
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
an.compositions['E093E0C986F3AC4FBD8496AC386B8BE8'] = {
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