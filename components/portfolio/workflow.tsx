import { ArrowDown, ArrowUpRight, Cable } from "lucide-react";
import { integrationWorkflow as workflow } from "@/data/portfolio";

export function Workflow() {
  return (
    <figure
      className="workflow"
      aria-labelledby="workflow-title"
      aria-describedby="workflow-caption"
    >
      <div className="workflow-heading">
        <span className="eyebrow">System relationships</span>
        <span className="technical-label">Conceptual</span>
      </div>
      <h4 id="workflow-title">{workflow.label}</h4>
      <div className="workflow-application">
        <span className="node-label">Application</span>
        <strong>{workflow.application}</strong>
        <p>{workflow.applicationNote}</p>
      </div>
      <div className="workflow-connection">
        <ArrowDown size={20} aria-hidden="true" />
        <span>
          <Cable size={15} aria-hidden="true" />
          {workflow.connection}
        </span>
        <ArrowDown size={20} aria-hidden="true" />
      </div>
      <div
        className="workflow-providers"
        aria-label="Connected external providers"
      >
        {workflow.providers.map((provider) => (
          <div key={provider}>
            {provider}
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
        ))}
      </div>
      <p className="workflow-contribution">{workflow.contribution}</p>
      <figcaption id="workflow-caption">{workflow.caption}</figcaption>
    </figure>
  );
}
