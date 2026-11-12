import './trading-view.scss';

const TRADINGVIEW_EMBED_URL =
    'https://s.tradingview.com/widgetembed/?symbol=FX%3AEURUSD&interval=15&theme=dark&style=1&locale=en&toolbarbg=%23111c2e&enable_publishing=false&hide_top_toolbar=false&hide_legend=false&save_image=false&withdateranges=true&hide_side_toolbar=false&allow_symbol_change=true&details=true&hotlist=true&calendar=true&symboledit=true';

const TradingViewPage = () => (
    <main className='trading-view-page' aria-label='TradingView charts'>
        <iframe
            className='trading-view-page__frame'
            title='TradingView live chart'
            src={TRADINGVIEW_EMBED_URL}
            loading='lazy'
            allow='clipboard-write; fullscreen'
            referrerPolicy='strict-origin-when-cross-origin'
        />
    </main>
);

export default TradingViewPage;
