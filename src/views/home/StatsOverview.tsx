import {
    IconOne,
    IconTwo,
    IconThree,
    IconFour,
    IconFive,
    IconSix,
    IconSeven,
    IconEight,
} from './FeatureIcons';
import { FiCheckCircle } from 'react-icons/fi';

const icons = [<IconOne key={1} />, <IconTwo key={2} />, <IconThree key={3} />, <IconFour key={4} />];
const stats = [
    { label: '24/7', desc: 'Monitoring Coverage' },
    { label: '672+', desc: 'Incidents Tracked' },
    { label: '36', desc: 'States Covered' },
    { label: '95.3%', desc: 'Response Rate' },
];
const StatsOverview = () => {
    return (
        <section className="bg-gray-900/70 py-16 md:px-60 text-center px-10">
            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map(({ label, desc }, i) => (
                    <div key={i} className="flex flex-col items-center space-y-3">
                        {icons[i]}
                        <span className="text-3xl font-bold text-white">{label}</span>
                        <span className="text-white">{desc}</span>
                    </div>
                ))}
            </div>

            {/* Platform Description */}
            <div className="mb-10">
                <span className="inline-flex items-center gap-2 px-4 text-black py-1 text-sm font-semibold text-brown-700 bg-green-100 rounded-full">
                    <FiCheckCircle className="w-4 h-4" />
                    Comprehensive Platform
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                    Comprehensive Environmental Management
                </h2>
                <p className="mt-2 text-white max-w-2xl mx-auto">
                    NOSDRAConnect provides a unified platform for environmental oversight, incident management, and regulatory compliance across Nigeria.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {[
                    {
                        title: 'Environmental Monitoring',
                        desc: 'Real-time tracking and monitoring of oil spill incidents across Nigeria',
                        color: 'bg-mint-100',
                        icon: <IconFive />,
                    },
                    {
                        title: 'Department Coordination',
                        desc: 'Seamless collaboration between all NOSDRA departments and field units',
                        color: 'bg-indigo-100',
                        icon: <IconSix />,
                    },
                    {
                        title: 'Compliance Reports',
                        desc: 'Automated reporting and documentation for regulatory compliance',
                        color: 'bg-purple-100',
                        icon: <IconSeven />,
                    },
                    {
                        title: 'Incident Response',
                        desc: 'Rapid response coordination for oil spill emergencies',
                        color: 'bg-rose-100',
                        icon: <IconEight />,
                    },
                ].map(({ title, desc, color, icon }, i) => (
                    <div key={i} className="p-10 mr-4 rounded-xl shadow-lg bg-gray-800/50 hover:shadow-xl hover:shadow-gray-600 hover:-translate-y-1 transform transition-all duration-300 text-center w-72 h-72">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${color} bg-brown-100 mx-auto mb-4`}>
                            {icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                        <p className="mt-1 text-sm text-white">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsOverview;