import { DBOT_TABS } from '@/constants/bot-contents';
import DigitPanel from '@/pages/bot-builder/digit-panel/digit-panel';
import { useStore } from '@/hooks/useStore';
import { observer } from 'mobx-react-lite';
import './analysis-v2.scss';

const AnalysisV2 = () => {
    const { dashboard } = useStore();

    return (
        <main className='analysis-v2-page' aria-label='Analysis v2'>
            <div className='analysis-v2-page__content'>
                <DigitPanel onClose={() => dashboard.setActiveTab(DBOT_TABS.FREE_BOTS)} />
            </div>
        </main>
    );
};

export default observer(AnalysisV2);
