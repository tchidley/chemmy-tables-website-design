type Point = [number, number]

type Ring = {
  center: Point
  doubleBonds: number[]
}

type MoleculeShape = {
  viewBox: string
  rings: Ring[]
  bonds?: [Point, Point][]
  labels?: { at: Point; text: string }[]
}

const RADIUS = 40
const RING_SPACING = RADIUS * Math.sqrt(3)

function hexVertices([cx, cy]: Point): Point[] {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = ((-90 + 60 * i) * Math.PI) / 180
    return [cx + RADIUS * Math.cos(angle), cy + RADIUS * Math.sin(angle)]
  })
}

function lerp([ax, ay]: Point, [bx, by]: Point, t: number): Point {
  return [ax + (bx - ax) * t, ay + (by - ay) * t]
}

function innerBond(a: Point, b: Point, center: Point): [Point, Point] {
  const ia = lerp(a, center, 0.2)
  const ib = lerp(b, center, 0.2)
  return [lerp(ia, ib, 0.15), lerp(ia, ib, 0.85)]
}

const shapes = {
  benzene: {
    viewBox: '0 0 100 100',
    rings: [{ center: [50, 50], doubleBonds: [0, 2, 4] }],
  },
  naphthalene: {
    viewBox: `0 0 ${100 + RING_SPACING} 100`,
    rings: [
      { center: [50, 50], doubleBonds: [1, 3, 5] },
      { center: [50 + RING_SPACING, 50], doubleBonds: [0, 2] },
    ],
  },
  phenol: {
    viewBox: '0 -40 100 140',
    rings: [{ center: [50, 50], doubleBonds: [1, 3, 5] }],
    bonds: [
      [
        [50, 10],
        [50, -14],
      ],
    ],
    labels: [{ at: [50, -22], text: 'OH' }],
  },
} satisfies Record<string, MoleculeShape>

export type MoleculeVariant = keyof typeof shapes

type MoleculeProps = {
  variant: MoleculeVariant
  className?: string
}

export function Molecule({ variant, className }: MoleculeProps) {
  const shape: MoleculeShape = shapes[variant]

  const lines: [Point, Point][] = [...(shape.bonds ?? [])]
  for (const ring of shape.rings) {
    const vertices = hexVertices(ring.center)
    vertices.forEach((v, i) => lines.push([v, vertices[(i + 1) % 6]]))
    ring.doubleBonds.forEach((i) =>
      lines.push(innerBond(vertices[i], vertices[(i + 1) % 6], ring.center)),
    )
  }

  return (
    <svg
      viewBox={shape.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {lines.map(([[x1, y1], [x2, y2]], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {shape.labels?.map(({ at: [x, y], text }) => (
        <text
          key={text}
          x={x}
          y={y}
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          className="font-serif"
          fontSize={14}
        >
          {text}
        </text>
      ))}
    </svg>
  )
}
