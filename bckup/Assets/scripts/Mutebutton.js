﻿#pragma strict

function Start () {
	//GameManager.muted = false;
	if (GameManager.muted) {	
		var l = GameObject.FindGameObjectsWithTag("mute_btn");	
		var temp_sprite : Sprite = l[0].GetComponent(SpriteRenderer).sprite;
		l[0].GetComponent(SpriteRenderer).sprite = l[1].GetComponent(SpriteRenderer).sprite;
		l[1].GetComponent(SpriteRenderer).sprite = temp_sprite;
		
		MusicControl.Mute();
	}
	else 
		MusicControl.Unmute();
}

function OnMouseDown () {	
	var l = GameObject.FindGameObjectsWithTag("mute_btn");	
	var temp_sprite : Sprite = l[0].GetComponent(SpriteRenderer).sprite;
	l[0].GetComponent(SpriteRenderer).sprite = l[1].GetComponent(SpriteRenderer).sprite;
	l[1].GetComponent(SpriteRenderer).sprite = temp_sprite;
	
	GameManager.muted = ! GameManager.muted;
	if (GameManager.muted)	
		MusicControl.Mute();
	else 
		MusicControl.Unmute();
}
