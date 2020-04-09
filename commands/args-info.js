module.exports = {
	name: 'args-info',
    description: 'Information about the arguments provided.',
    // args: true,
	execute(message, args) {
        if (args[0] === 'combo') {
            message.channel.send(`${message.author}` + ' Provide "combo" after a character to get a combo string');
        }
        else if (args[0] === 'special') {
            message.channel.send(`${message.author}` + ' Provide "special" after a character to get a special move from a variation');
        }
        else {
            message.channel.send(`${message.author}` + ' Available arguments are: combo & special');
        }
		// message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};