function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  player.media.autoplay = true;
}

export default AutoPlay;