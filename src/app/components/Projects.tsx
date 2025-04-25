import { projects } from "@/data/projects";

export default function Projects() {
    return (
      <div>
        <h1 className="text-title">Projects</h1>
        <div className="flex flex-row lg:max-w-1/2 flex-wrap gap-2">
          {projects.map((project) => (
            <div key={project.name} className="p-2 bg-neutral-900">
              <h1>{project.name}</h1>
              <p className="text-muted">{project.description}</p>
              <div className="flex flex-row gap-2">
                {project.live && (
                  <a className="project-link" href={project.live} target="_blank">
                    Live
                  </a>
                )}
                {project.code && (
                  <a className="project-link" href={project.code} target="_blank">
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}