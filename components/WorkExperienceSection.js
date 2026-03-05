'use client'
import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'

const WorkExperienceSection = () => {

    const { workExperience } = data.data

    return (
        <section id="experience" className="bg-black text-white py-8">
            <div className="mx-auto px-6 md:px-8 lg:px-16">

                <SectionHeader 
                    title={'experience'} 
                    description={'My professional and competition journey'} 
                />

                <div className="mt-12 relative border-l border-gray-700">

                    {workExperience.map((exp, index) => (
                        <div key={index} className="mb-12 ml-6">

                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5"></div>

                            <h3 className="text-xl font-bold font-mono">
                                {exp.position}
                            </h3>

                            <p className="text-gray-400 text-sm mb-2">
                                {exp.company} • {exp.duration}
                            </p>

                            <p className="text-gray-300 mb-4">
                                {exp.description}
                            </p>

                            <ul className="list-disc ml-5 text-gray-400 space-y-1">
                                {exp.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default WorkExperienceSection