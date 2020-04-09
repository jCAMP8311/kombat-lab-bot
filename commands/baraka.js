module.exports = {
	name: 'baraka',
	aliases: ['Baraka', 'baraka'],
	description: 'Baraka practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {
		var comboMove = [
			" [Hard] Mangled [1,1,2] is +1 on block. Try blocking the first two hits and then flawless blocking the last hit to punish.",
			" [Hard] Splintered [2,1+3] is +1 on block. Try neutral ducking the first swing and then flawless blocking the second hit. Follow up with a flawless block attack!",
			" [Hard] Splintered [2,1+3] is +1 on block. The first swing is a high, and while very hard to read, can be punished with an uppercut for a crushing blow. Try it out!"
		]
		var specialMove = [
			" [Med] Chop Chop - Try blocking 3 hits and then punishing with b+3",
			" [Easy] Blade Spark [Amplified] Try neutral ducking the first projectile and then flawless blocking the second projectile."
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