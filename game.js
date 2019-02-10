/* fix in janke
  gdam null thing on first call
  updating state from cached instance should return cached instance
    or not? this can always be done by method if want cached instance returned
    top-level-direct calls should return top-level things?
*/


var game = janke({
    state:{
      levels: {},
      user_name: 'poo',
      score: 0,
      levels_log: []
    },
    methods: {
      update_score: function (points) {
          return {score: this.score += points};
        },
      push_level: function (level) {
          this.levels_log.push(level)
          return {levels_log: this.levels_log};
        }
    },
    routines: {
      play_level: function (flips) {
          const cache = this('cache');
          for (let i = 0; i < flips; i++) {
            cache.lever_state = !cache.lever_state;
            cache.flips_count++;
          };
          this.update_score(cache.tracks[+cache.lever_state]);
          this.push_level(cache);
        }
    }
  });

console.log(game('state'))
game.update_score(3)
console.log(game('state'))

{
  const cache = {
      id: 'bananas',
      tracks: [4, 1],
      flips_count: 0,
      lever_state: true
    };
  const bananas = game.cache(cache, 'bananas level');
  bananas.play_level(3);
};

{
  const cache = {
      id: 'chairs',
      tracks: [5, 3],
      flips_count: 0,
      lever_state: true
    };
  const chairs = game.cache(cache, 'chairs level');
  chairs.play_level(7);
};

{
  const cache = {
      id: 'rats',
      tracks: [2, 2],
      flips_count: 0,
      lever_state: true
    };
  const rats = game.cache(cache, 'rats level');
  rats.play_level(12);
};


