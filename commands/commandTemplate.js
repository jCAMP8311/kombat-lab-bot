module.exports = {
	name: '',
	aliases: ['', ''],
	description: 'Baraka  moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {
		var comboMove = [

		]
		var specialMove = [

		]
		if (args[0] === 'combo') {
			var randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)]; 
			message.channel.send(`${message.author}` + randomComboMove);
		}
		else if (args[0] === 'special') {
			var randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)]; 
			message.channel.send(`${message.author}` + randomSpecialMove);
		}
		else if (!args[0]) {
			var anyMove = comboMove.concat(specialMove);
			var randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];
			message.channel.send(`${message.author}` + randomMove);
		}
		else if (args[0] != 'combo' || 'special') {
			message.channel.send(`${message.author}` + ' That is not a valid argument, please use !args-info to see the list of available arguments');
		}
	},
};