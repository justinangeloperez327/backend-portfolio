"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { ProjectImage } from "@/lib/project-images";

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = images[index];

  const open = (next: number) => {
    setIndex(next);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <>
      <ul className="gallery-grid">
        {images.map((image, i) => (
          <li key={image.src}>
            <button type="button" className="gallery-thumb" onClick={() => open(i)}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span className="sr-only">Open larger</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label="Screenshot viewer"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        {current && (
          <figure className="gallery-figure">
            <div className="gallery-frame">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" />
            </div>
            <figcaption>
              {current.alt} <span>{index + 1} / {images.length}</span>
            </figcaption>
          </figure>
        )}
        <div className="gallery-controls">
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot">
                <ChevronLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next screenshot">
                <ChevronRight aria-hidden="true" />
              </button>
            </>
          )}
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close viewer">
            <X aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </>
  );
}
