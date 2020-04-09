module.exports = {
	name: 'cassie',
	aliases: ['Cassie', 'cassie', 'Cassie Cage', 'cassie cage'],
	description: 'Cassie Cage practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {
		var comboMove = [
			" [Hard] Shocker [f2,1+3] is +1 on block. Try flawless blocking the first hit. Follow up with a flawless block attack!",
			" [Very Hard] Heavy Hitter [f3,4,3] is +1 on block. Try hoping the first hit (low) and punishing with d+1/2,",
			" [Easy] Ball Buster can only be amplified on hit and is -22 on block. Practice blocking the first hit and getting a full punish!",
		]
		var specialMove = [
			" [Medium] Kneecappin' [Amplified] A single hop can avoid the first hit [Mid] and the follow up shots from being amplified. Try practicing your hops!",
			" [Easy] Shoulder Charge [Amplified] This move has a crushing blow if you block late. Try flawless blocking and following up with a flawless block attack! "
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