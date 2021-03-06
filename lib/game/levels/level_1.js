ig.module( 'game.levels.level_1' )
.requires( 'impact.image' )
.defines(function(){
LevelLevel_1=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "main",
			"width": 22,
			"height": 20,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/maintiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,3,0,11,12,4,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,6,0,0,0,5,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,3,13,14,4,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,6,0,0,5,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 22,
			"height": 20,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,51,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,51,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelLevel_1Resources=[new ig.Image('media/maintiles.png')];
});