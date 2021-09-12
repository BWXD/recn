
const Discord = require("discord.js");
var client = new Discord.Client();

var gameroom = "None.";

var playername = "";
var playerflag = "";
var playerpos = "";
var playergoals = "";
var playerassists = "";
var playercps = "";
var playerminutes = "";

client.on("ready", function() {
        var dd = new Date;
        var h = dd.getUTCHours();
        var m = dd.getUTCMinutes();
        var hh = ""; var mm = "";
        if(h < 10){hh = "0"} else if(h > 9){hh = ""}
        if(m < 10){mm = "0"} else if(m > 9){mm = ""}
        console.log("Bot is up.")
        client.channels.cache.get("812376120238145567").send(new Discord.MessageEmbed()
        .setColor("#F2F2F2")
        .setTitle("Bot was deployed at __" + hh + h + ":" + mm + m + " GMT__."))
        client.user.setStatus("online")
});


client.on("message", async function(message) {
if (message.author.equals(client.user)) return;


if (!message.content.startsWith("+")) return;
var args = message.content.substring("+".length).split(" ");
switch (args[0].toLowerCase()) {

    case "help":
        message.channel.send(new Discord.MessageEmbed()
        .setColor("#079898")
        .setTitle(`Commands:`)
        .addField("+profile","Show stats of a player.")
        .addField("+squad","Current roster of the team.")
        .addField("+s11","Season 11 roster of the team.")
        .addField("+s10","Season 10 roster of the team.")
        .addField("+s9","Season 9 roster of the team.")
        .addField("+s8","Season 8 roster of the team.")
        .addField("+sc2021","Summercup 2021 roster of the team.")
        .addField("+sc2020","Summercup 2020 roster of the team.")
        .addField("+team & +history","Team spreadsheet document."));
    break;

    case "profile":
        if(message.member.roles.cache.has("860669274237304882")){
            if(message.mentions.members.first()){
                if(message.mentions.members.first().id == "782407711757303831"){
                    playername = "Isir"
                    playerflag = ":flag_pl:"
                    playerpos = "GK"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "634872299069374488"){
                    playername = "> BW <"
                    playerflag = ":flag_ma:"
                    playerpos = "All"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "681621579440193605"){
                    playername = "ITS ME"
                    playerflag = ":flag_ma:"
                    playerpos = "DM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "273131438306754560"){
                    playername = "DYNASTY"
                    playerflag = ":flag_tr:"
                    playerpos = "DM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "647757857621540884"){
                    playername = "JuVeN"
                    playerflag = ":flag_pl:"
                    playerpos = "AM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "686560019600506940"){
                    playername = "Kratos"
                    playerflag = ":flag_be:"
                    playerpos = "AM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "377929887329288192"){
                    playername = "ADO"
                    playerflag = ":flag_de:"
                    playerpos = "ST"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.mentions.members.first().id == "298933214569824257"){
                    playername = "Linde"
                    playerflag = ":flag_pl:"
                    playerpos = "ST"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                message.channel.send(new Discord.MessageEmbed()
                    .setColor("#079898")
                    .setTitle(playerflag + " " + playername)
                    .setDescription(`**Position:** ` + playerpos + `
**Goals:** ` + playergoals + `
**Assists:** ` + playerassists + `
**CPs:** ` + playercps + `
**Minutes:** ` + playerminutes)
                );
            } else {
                if(message.author.id == "782407711757303831"){
                    playername = "Isir"
                    playerflag = ":flag_pl:"
                    playerpos = "GK"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "634872299069374488"){
                    playername = "> BW <"
                    playerflag = ":flag_ma:"
                    playerpos = "All"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "681621579440193605"){
                    playername = "ITS ME"
                    playerflag = ":flag_ma:"
                    playerpos = "DM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "273131438306754560"){
                    playername = "DYNASTY"
                    playerflag = ":flag_tr:"
                    playerpos = "DM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "647757857621540884"){
                    playername = "JuVeN"
                    playerflag = ":flag_pl:"
                    playerpos = "AM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "686560019600506940"){
                    playername = "Kratos"
                    playerflag = ":flag_be:"
                    playerpos = "AM"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "377929887329288192"){
                    playername = "ADO"
                    playerflag = ":flag_de:"
                    playerpos = "ST"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                if(message.author.id == "298933214569824257"){
                    playername = "Linde"
                    playerflag = ":flag_pl:"
                    playerpos = "ST"
                    playergoals = "0";
                    playerassists = "0";
                    playercps = "0";
                    playerminutes = "0";
                }
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("#079898")
                    .setTitle(playerflag + " " + playername)
                    .setDescription(`**Position:** ` + playerpos + `
**Goals:** ` + playergoals + `
**Assists:** ` + playerassists + `
**CPs:** ` + playercps + `
**Minutes:** ` + playerminutes)
                    );
            }
        }
    break;

    case "squad":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#079898")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_pl: <@782407711757303831>
:flag_ma: <@634872299069374488> (C)
:flag_sk: <@443111787047419904>
:flag_ma: <@681621579440193605> (Co)
:flag_be: <@686560019600506940>
:flag_ma: <@415607266130001931>
:flag_de: <@377929887329288192>
:flag_pl: <@298933214569824257>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/768065930882056213/874819420340506624/logo-3.png")
            .setFooter("Season 12")
            );
        }
    break;

    case "academy":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#5091cf")
            .setTitle("Athletic Reconnaissance Academy")
            .setDescription(`:flag_ca: <@573516570274299904>
:flag_km: <@308239462167740416>
:flag_tr: <@273131438306754560>
:flag_pl: <@801207474090016799> (C)
:flag_pl: <@647757857621540884>
:flag_fr: <@449707849661284353>
:flag_ru: <@598556892918448138>
:flag_az: <@468680458771628032>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/768065930882056213/874819420340506624/logo-3.png")
            .setFooter("Season 12")
            );
        }
    break;

    case "sc2021":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#0066aa")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_ru: <@403283223486136341>
:flag_km: <@484056577427374080>
:flag_ro: <@530010745912557598>
:flag_ba: <@564780374052569122>
:flag_pl: <@647757857621540884>
:flag_ba: <@419898168470142978>
:flag_pl: <@579544901901877248>
:flag_de: <@377929887329288192>
:flag_it: <@463440687006875659>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/768065930882056213/859433058397716530/athletic.png")
            .setFooter("Summercup 2021")
            );
        }
    break;

    case "s11":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#0066aa")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_pl: <@782407711757303831>
:flag_km: <@484056577427374080>
:flag_rs: <@728414244244160554>
:flag_ba: <@564780374052569122>
:flag_be: <@686560019600506940>
:flag_pl: <@647757857621540884>
:flag_hr: <@549668767047876608> (C)
:flag_ca: <@323629520290709515>
:flag_pt: <@645329743285321778>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/768065930882056213/814889693329489950/logo.png")
            .setFooter("Season 11")
            );
        }
    break;

    case "s10":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#0000cc")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_pt: <@645329743285321778>
:flag_pl: <@539572494974189595>
:flag_pl: <@418129445631557633>
:flag_be: <@686560019600506940>
:flag_rs: <@573194164515110923>
:flag_ro: <@731881046492184617>
:flag_cz: <@562641064763326495>
:flag_nl: <@665846706147033098> (C)`)
            .setThumbnail("https://cdn.discordapp.com/attachments/768065930882056213/768066788746985492/favicon.png")
            .setFooter("Season 10")
            );
        }
    break;

    case "s9":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#4791ff")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_si: <@780517337954385990>
:flag_ma: <@634872299069374488> (C)
:flag_ru: <@598556892918448138>
:flag_gb: <@272341791116886016>
:flag_pl: <@801207474090016799>
:flag_mx: <@739725213066985473>
:flag_ma: <@415607266130001931>
:flag_nl: <@665846706147033098>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/761561425230561320/879836970778525696/S9.png")
            .setFooter("Season 9")
            );
        }
    break;

    case "sc2020":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#4791ff")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_ma: <@634872299069374488> (C)
:flag_pt: <@585839295479152640>
:flag_de: <@452618311583137812>
:flag_pl: <@294482237024501760>
:flag_pl: <@523847950108065830>
:flag_ba: <@419898168470142978>
:flag_ba: <@343828169608003595>
:flag_ru: <@598556892918448138>
:flag_hr: <@549668767047876608>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/761561425230561320/879836953812533268/S8.png")
            .setFooter("Summercup 2020")
            );
        }
    break;

    case "s8":
        if(message.member.roles.cache.has("860669274237304882")){
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#4791ff")
            .setTitle("Athletic Reconnaissance")
            .setDescription(`:flag_ro: <@567016406244130854>
:flag_pt: <@585839295479152640>
:flag_ru: <@598556892918448138>
:flag_ro: <@731881046492184617>
:flag_pl: <@424219287926996992>
:flag_pl: <@646428492866650153> (C)
:flag_pl: <@801207474090016799>
:flag_pl: <@417307518189043724>
:flag_hr: <@549668767047876608>`)
            .setThumbnail("https://cdn.discordapp.com/attachments/761561425230561320/879836953812533268/S8.png")
            .setFooter("Season 8")
            );
        }
    break;
    
    case "team":
        if(message.member.roles.cache.has("860669274237304882")){
            message.reply("here is team's spreadsheet:" + `
https://docs.google.com/spreadsheets/d/1wrxtVsr5v3BobbxZGq40lowNnLp8rmsiyWfH6Ll6xpo/edit?usp=sharing`)
        }
    break;

    case "history":
        if(message.member.roles.cache.has("860669274237304882")){
            message.reply("here is team's spreadsheet:" + `
https://docs.google.com/spreadsheets/d/1wrxtVsr5v3BobbxZGq40lowNnLp8rmsiyWfH6Ll6xpo/edit?usp=sharing`)
        }
    break;






    
    // OWNER COMMANDS

    case "lock":
        message.delete()
        if(message.author.id == "634872299069374488"){
            message.channel.createOverwrite("860669274237304882", {'VIEW_CHANNEL':false})
        }
    break;

    case "unlock":
        message.delete()
        if(message.author.id == "634872299069374488"){
            message.channel.createOverwrite("860669274237304882", {'VIEW_CHANNEL':true})
        }
    break;

    case "room":
        if(message.author.id == "634872299069374488" && message.content.startsWith("+room https://www.haxball.com/play")){
            const emb = new Discord.MessageEmbed()
                .setColor("#079898")
                .setTitle(message.content.split("+room "))
            client.channels.cache.get("860669945192906772").send(emb)
            gameroom = message.content.split("+room ");
        }
        message.delete();
    break;

    case "say":
        if(message.author.id == "634872299069374488"){
            message.delete();
            const emb2 = new Discord.MessageEmbed()
                .setColor("#079898")
                .setTitle(message.content.split("+say "))
            message.channel.send(emb2)
        }
    break;

    }
});

client.login(process.env.TOKEN);
