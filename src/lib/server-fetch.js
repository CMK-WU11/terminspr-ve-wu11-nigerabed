export async function serverFetch(url) {
	try {
		const response = await fetch(url)
		console.log("response", response.status);
		
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}
