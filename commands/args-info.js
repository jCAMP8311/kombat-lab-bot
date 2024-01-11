module.exports = {
	name: 'args-info',
    description: 'Information about the arguments provided.',
    // args: true,
	execute(message, args) {
        if (args[0] === 'normal') {
            message.channel.send(`${message.author}` + ' Provide "normal" after a character to get a normal string');
        }
        else if (args[0] === 'special') {
            message.channel.send(`${message.author}` + ' Provide "special" after a character to get a special move from a random tournament variation');
        }
        else {
            message.channel.send(`${message.author}` + ' Available arguments are: normal & special');
        }
		// message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};