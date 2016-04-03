
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function genCommands(name) {
    var copy_evt = "xcopy /E /d \"content\\soundevents\\voscripts\\*%s*\" \"\%cbase\%\\soundevents\\voscripts\\\"\n".replaceAll("%s",name);
    var copy_snd = "xcopy /E /d \"content\\sounds\\vo\\%s\" \"\%cbase\%\\sounds\\vo\\%s\\*\"\n".replaceAll("%s",name);

    $("#script").append(copy_evt);
    $("#script").append(copy_snd);
    
}

function genAnnCommands(name) {
    var copy_evt1 = "xcopy /E /d \"content\\soundevents\\voscripts\\game_sounds_vo_announcer.vsndevts\" \"\%cbase\%\\soundevents\\voscripts\\\"\n"
    var copy_evt2 = "xcopy /E /d \"content\\soundevents\\voscripts\\game_sounds_vo_announcer_dlc_glados.vsndevts\" \"\%cbase\%\\soundevents\\voscripts\\\"\n"
    var copy_snd = "xcopy /E /d \"content\\sounds\\vo\\announcer_dlc_glados\" \"\%cbase\%\\sounds\\vo\\announcer_dlc_glados\\*\"\n"

    $("#script").append(copy_evt1);
    $("#script").append(copy_evt2);
    $("#script").append(copy_snd);
}

function getMegaCommands(name) {
    var copy_evt = "xcopy /E /d \"content\\soundevents\\voscripts\\game_sounds_vo_announcer_killing_spree.vsndevts\" \"\%cbase\%\\soundevents\\voscripts\\\"\n"
    var copy_snd = "xcopy /E /d \"content\\sounds\\vo\\announcer_killing_spree\" \"\%cbase\%\\sounds\\vo\\announcer_killing_spree\\*\"\n"

    $("#script").append(copy_evt);
    $("#script").append(copy_snd);
}

function genScript(selections) {
    var mega_all = ["rise_best_girl", "chitoge", "onodera", "marika", "katou", "hestia", "iroha", "rise_eng_girl", "kongou", "tamamo", "umi"];
    var ann_all = ["rise3"];
    var hvo_all = ["broodmother", "crystalmaiden", "death_prophet", "drowranger", "enchantress", "lina", "luna", "medusa", "naga_siren", "phantom_assassin", "puck", "queenofpain", "spectre", "templar_assassin", "windrunner", "winter_wyvern", "wisp", "vengefulspirit"]

    var mega_list = selections.filter(function(n) {
        return mega_all.indexOf(n) != -1;
    });
    var ann_list = selections.filter(function(n) {
        return ann_all.indexOf(n) != -1;
    });
    var hvo_list = selections.filter(function(n) {
        return hvo_all.indexOf(n) != -1;
    });
    if (mega_list.length > 0) {
        getMegaCommands();
    }
    if (ann_list.length > 0) {
        genAnnCommands();
    }
    for (var i = 0; i < hvo_list.length; i++) {
        genCommands(hvo_list[i]);
    }
    var txt2 = $("#script2").val();
    $("#script").append(txt2);
    saveTextAsFile();
}
