import { useTranslation } from "react-i18next";
import PointingArrow from "./PointingArrow";
import ProjectCarousel from "./ProjectCarousel";
import { projectImages } from "../assets/images/projects/imageManifest";

type ProjectTileProps = {
    projectName: string;}

const ProjectTile: React.FC<ProjectTileProps> = ({ projectName }) => {

  const { t } = useTranslation();
  const imagePath = `../assets/images/projects/${projectName}`;
  
  return (
    <article className="group relative grid gap-4 sm:grid-cols-8 sm:gap-8 transition-all mt-8 mb-8">
      <div className="absolute -inset-4 z-0 hidden rounded-md lg:block lg:group-hover:bg-slate-800/50" />
      
      <div className="z-10 sm:col-span-6 sm:order-2">
        <h3>
          <a 
            href="https://www.newline.co/courses/build-a-spotify-connected-app" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-baseline font-medium text-slate-200 hover:text-teal-300 group/link"
          >
            {t(`projects.${projectName}.name`)}
            <span className="inline-flex items-center">
              <PointingArrow />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm">
        {t(`projects.${projectName}.description`)}
        </p>
      </div>
      <ProjectCarousel 
        projectName="blobbjj" 
        imageFiles={projectImages['blobbjj']} 
      />
    </article>
  );
}

export default ProjectTile;