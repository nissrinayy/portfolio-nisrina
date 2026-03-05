import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter'
import SectionHeader from '@/components/UI/SectionHeader'
import data from '@/data/data.json'

export const metadata = {
  title: 'Portfolio | Nisrina Ikbar',
  description:
    'Explore projects, achievements, and technical work by Nisrina Ikbar, Data & Backend Developer.',
  openGraph: {
    title: 'Nisrina Ikbar - Portfolio',
    description:
      'Explore projects, achievements, and technical work by Nisrina Ikbar.',
    url: 'https://nisrina-ikbar.xyz',
    images: [
      {
        url: 'https://nisrina-ikbar.xyz/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nisrina Ikbar Portfolio Preview',
      },
    ],
  },
  alternates: {
    canonical: 'https://nisrina-ikbar.xyz',
  },
}

export default function ProjectsPage() {

  const { projects } = data.data

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category))
  ]

  return (
    <section className="bg-black text-white py-6 mt-22">

      <main className="mx-auto px-6 md:px-8 lg:px-16">

        <SectionHeader
          title={'projects'}
          description={'View all my latest projects here'}
          linkText={'back to home'}
          link={'/'}
        />

        <div className="mt-16">
          <ProjectsWithFilter
            projects={projects}
            categories={categories}
          />
        </div>

      </main>

    </section>
  )
}