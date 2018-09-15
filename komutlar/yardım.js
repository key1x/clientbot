const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \!banned = Dene ve Gör! \!kahkaha = Kahkaha Atarsınız \!herkesebendençay = Herkese Çay Alırsınız. \!koş = Koşarsınız.\!çayiç = Çay İçersiniz. \!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \!çayaşekerat = Çaya Şeker Atarsınız. \!yumruk-at = Yumruk Atarsınız. \!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `!report = İstediğiniz Kullanıcıyı Reportlarsınız. \!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \!yaz = Bota İsediğinizi Yazdırırsınız. \!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. /!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n!unban = İstediğiniz Kişinin Yasağını Açar. \!sustur = İstediğiniz Kişiyi Susturur. \n!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \!oylama = Oylama Açar. \!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "!yardım = BOT Komutlarını Atar. \!bilgi = BOT Kendisi Hakkında Bilgi Verir. \!ping = BOT Gecikme Süresini Söyler. \!davet = BOT Davet Linkini Atar. \!istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('KEYTR Güncel Sürüm [ BETA v0.3.8 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
