const config = {
    HOST_API: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''
};

export default config;