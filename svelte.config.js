import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'docs',
            assets: 'docs',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
			base: dev ? '' : '/Gallery'
		}
    }
};
