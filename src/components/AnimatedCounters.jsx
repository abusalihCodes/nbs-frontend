
import CountUp from 'react-countup';

const AnimatedCounters = ({ stats }) => {

    return (
        <section className="animated-counters">
            <div className="container counters-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="counter-item">
                        <p className="counter-value">
                            <CountUp 
                                start={0} 
                                end={stat.end} 
                                duration={3} 
                                // We keep prefix/suffix here for non-Billion numbers (like 40+)
                                prefix={!stat.isLargeNumber ? stat.prefix : ''} 
                                suffix={!stat.isLargeNumber ? stat.suffix : ''} 
                                enableScrollSpy={true} 
                                scrollSpyOnce={true} 
                                
                                // CORRECTED: Formatting function now returns the full string
                                formattingFn={stat.isLargeNumber ? (value) => {
                                    // 1. Convert to 3.5
                                    const formattedValue = (value / 1000000000).toFixed(1);
                                    // 2. Prepend the $ and Append the B
                                    return `${stat.prefix}${formattedValue}${stat.suffix}`;
                                } : undefined}
                                
                                className="number-display"
                            />
                        </p>
                        <p className="counter-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimatedCounters;