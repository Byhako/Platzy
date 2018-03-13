const waitTime = new Promise( (todoOK, todoMal)=>{
	setTimeout( ()=>{
		todoOK('Han pasado tres segundos.');
	},3000 )
})

module.exports = {
	firstMessage: 'Hola desde un módulo',
	secondMessage: 'Un segundo mensage.',
	
	delay: async ()=>{
		const message = await waitTime;
		console.log(message);
	},
}