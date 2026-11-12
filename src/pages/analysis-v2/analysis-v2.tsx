import './analysis-v2.scss';

const ANALYSIS_V2_URL = 'https://english-lemon-seven.vercel.app/';

const AnalysisV2 = () => (
    <main className='analysis-v2-page' aria-label='Analysis v2'>
        <iframe
            className='analysis-v2-page__frame'
            src={ANALYSIS_V2_URL}
            title='Analysis v2'
            loading='eager'
            allow='clipboard-read; clipboard-write'
            referrerPolicy='strict-origin-when-cross-origin'
        />
    </main>
);

export default AnalysisV2;
