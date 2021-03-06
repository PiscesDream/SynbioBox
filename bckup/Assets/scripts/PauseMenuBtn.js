﻿#pragma strict

function btn_continue () {
	var box = GameObject.FindGameObjectWithTag("Pause");
	box.GetComponent(RectTransform).localPosition.z = -100;
	Time.timeScale = 1;	
	GameManager.isPause = false;
	GameManager.isPlaying = true;
}

function btn_mute () {
	var l = GameObject.FindGameObjectsWithTag("mute_btn");	
	var temp_sprite : Sprite = l[0].GetComponent(SpriteRenderer).sprite;
	l[0].GetComponent(SpriteRenderer).sprite = l[1].GetComponent(UI.Image).sprite;
	l[1].GetComponent(UI.Image).sprite = temp_sprite;
	
	GameManager.muted = ! GameManager.muted;
	if (GameManager.muted)	{
		MusicControl.Mute();
		GameManager.SoundSource.mute = true;
	}
	else {
		MusicControl.Unmute();
		GameManager.SoundSource.mute = false;
	}
}

function btn_home () {
	Time.timeScale = 1;	
	Application.LoadLevel(1);
	MusicControl.PlayMainBGM();
	GameManager.isPause = false;
	GameManager.isPlaying = false;
}