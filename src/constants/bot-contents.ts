type TTabsTitle = {
    [key: string]: string | number;
};

type TDashboardTabIndex = {
    [key: string]: number;
};

export const tabs_title: TTabsTitle = Object.freeze({
    WORKSPACE: 'Workspace',
});

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
    DASHBOARD: 0,
    BOT_BUILDER: 1,
    ANALYSIS: 2,
    FREE_BOTS: 3,
    ANALYSIS_V2: 4,
    TRADING_VIEW: 5,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-dbot-dashboard',
    'id-bot-builder',
    'id-analysis',
    'id-free-bots',
    'id-analysis-v2',
    'id-trading-view',
];

export const DEBOUNCE_INTERVAL_TIME = 500;
