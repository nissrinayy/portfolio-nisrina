import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from '@/components/AchievementsSection'
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div id="home" className="pt-14 md:pt-24"><Hero /></div>
      <div id="skills" className="pt-14 md:pt-24"><SkillsSection /></div>
      <div id="experience" className="pt-14 md:pt-24"><WorkExperienceSection /></div>
      <div id="projects" className="pt-14 md:pt-24"><ProjectsSection /></div>
      <div className="pt-14 md:pt-24"> <AchievementsSection /></div>
      <div id="about-me" className="pt-14 md:pt-24"><AboutMe /></div>
      <div id="contact" className="pt-14 md:pt-24"><Contact /></div>    
    </>
  );
}
