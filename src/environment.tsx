interface Environment {
	serverUrl: string
}

export const environment: Environment = {
	serverUrl: process.env.SERVER_URL || ''
};