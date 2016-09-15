String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function genMegakills(list) {
  var sounds = [
    "kill_double",
    "kill_triple",
    "kill_ultra",
    "kill_rampage",
    "kill_spree",
    "kill_dominate",
    "kill_mega",
    "kill_unstop",
    "kill_wicked",
    "kill_monster",
    "kill_godlike",
    "kill_holy",
    "1stblood",
    "ownage"
  ];

  var arr = []
  for (var i = 0; i < sounds.length; i++) {
    arr.push('"announcer_killing_spree_announcer_' + sounds[i] + '_01" {');
    arr.push('"operator_stacks" {');
    arr.push('"update_stack" {');
    arr.push('"reference_operator" {');
    arr.push('"operator" "sos_reference_stack"');
    arr.push('"reference_stack" "dota_update_vo_switch"');
    arr.push('"operator_variables" {');
    arr.push('"vsnd_files" {');
    arr.push('"value" {');

    for (var j = 0; j < list.length; j++) {
      arr.push('"wave' + j + '" "sounds/vo/announcer_killing_spree/' + list[j] + '_' + sounds[i] + '.vsnd"');
    }

    arr.push('}}');
    arr.push('"volume" {"value" "0.700000"}');
    arr.push('"pitch" {"value" "1.000000"}');
    arr.push('}}}}}');
  }
  var script = "(\necho " + arr.join("\necho ") + "\n) > game_sounds_vo_announcer_killing_spree.vsndevts\n";
  return script;
}

function genScript(selections) {
    var mega_all = [
        "rise_best_girl",
        "chitoge",
        "onodera",
        "marika",
        "katou",
        "hestia",
        "iroha",
        "rem",
        "rise_eng_girl",
        "kongou",
        "tamamo",
        "umi"
    ];
    var ann_all = ["rise3"];
    var hvo_all = [
        "broodmother",
        "crystalmaiden",
        "death_prophet",
        "drowranger",
        "enchantress",
        "lina",
        "luna",
        "medusa",
        "naga_siren",
        "phantom_assassin",
        "puck",
        "queenofpain",
        "spectre",
        "templar_assassin",
        "windrunner",
        "winter_wyvern",
        "wisp",
        "vengefulspirit"
    ];

    var mega_list = selections.filter(function(n) {
        return mega_all.indexOf(n) != -1;
    });
    var ann_list = selections.filter(function(n) {
        return ann_all.indexOf(n) != -1;
    });
    var hvo_list = selections.filter(function(n) {
        return hvo_all.indexOf(n) != -1;
    });
    var doCopy = function(vpk, n) {
       var num = (n < 10 ? '0' : '') + n; 
       $("#script").append('\ncopy "'+vpk+'" "%mod%\\pak'+num+'_dir.vpk"');
    }
    var pak_idx = 1;
    if (mega_list.length > 0) {
        $("#script").append(genMegakills(mega_list));
        $("#script").append("\nCALL bin/compile.bat");
        doCopy("my_announcer_config.vpk", pak_idx);
        pak_idx++;
        doCopy("announcer_kill_spree.vpk", pak_idx);
        pak_idx++;
    }
    if (ann_list.length > 0) {
        doCopy("rise_announcer.vpk", pak_idx);
        pak_idx++;
    }
    for (var i = 0; i < hvo_list.length; i++) {
        doCopy("dotajp_" + hvo_list[i] + ".vpk", pak_idx);
        pak_idx++;
    }
    $("#script").append("\nset /p asdf=Press ENTER to exit.");
    saveTextAsFile();
}
