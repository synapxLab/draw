# @synapxlab/draw

Zero-dependency SVG drawing editor — injectable into any project. 7 tools, resize handles, rotation, properties panel. TypeScript-first, ESM + CJS.

> **[Français](#français)** — scroll down for the French version.

---

## Installation

```bash
npm install @synapxlab/draw
```

## Usage

```typescript
import { DrawEditor } from '@synapxlab/draw';
import '@synapxlab/draw/style.css';

// Instantiate once
const editor = new DrawEditor();

// Open the drawing modal — callback receives the final SVG string
editor.open('', (svg) => {
  document.getElementById('canvas')!.innerHTML = svg;
});
```

To re-edit an existing drawing, pass the previously returned SVG string:

```typescript
editor.open(existingSvg, (svg) => {
  myElement.innerHTML = svg;
});
```

## API

### `new DrawEditor()`

Creates a new editor instance and injects the modal into `document.body`. Call once and reuse.

### `editor.open(existingSvg, onInsert)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `existingSvg` | `string` | Existing SVG to reload for editing — pass `''` for a blank canvas |
| `onInsert` | `(svgStr: string) => void` | Callback called when the user clicks **Insert** |

### `editor.destroy()`

Removes the editor's DOM elements. Call when the editor is no longer needed.

### `DrawEditorInterface`

Typed contract for the injectable pattern:

```typescript
interface DrawEditorInterface {
  open(existingSvg: string, onInsert: (svgStr: string) => void): void;
  destroy(): void;
}
```

## Tools

| Tool | Description |
|------|-------------|
| `select` | Select, move, resize (8 handles) and rotate shapes |
| `pencil` | Freehand drawing |
| `rect` | Rectangle |
| `ellipse` | Ellipse / circle |
| `line` | Straight line |
| `arrow` | Line with arrowhead |
| `text` | Multiline text (Enter = new line, Ctrl+Enter to confirm) |

## Examples

```typescript
// Blank canvas
editor.open('', (svg) => {
  container.innerHTML = svg;
});

// Re-edit a previously saved SVG
const saved = container.innerHTML; // '<svg ...>...</svg>'
editor.open(saved, (svg) => {
  container.innerHTML = svg;
});
```

## TypeScript

Full types are included. Import the interface if you want to type your own implementation:

```typescript
import { DrawEditor, type DrawEditorInterface } from '@synapxlab/draw';

const editor: DrawEditorInterface = new DrawEditor();
editor.open('', (svg) => console.log(svg));
```

## Integration with @synapxlab/wysiwyg

Inject `DrawEditor` as an opt-in dependency so the editor can insert and re-edit drawings from its toolbar:

```typescript
import { WysiwygEditor } from '@synapxlab/wysiwyg';
import { DrawEditor } from '@synapxlab/draw';
import '@synapxlab/draw/style.css';

new WysiwygEditor('#editor', {
  draw: DrawEditor,
  toolbar: { draw: true },
});
```

Click an inserted drawing to open the properties panel (stroke colour, fill, size, float). Click **Modifier le dessin** to re-open the drawing editor with the existing shapes loaded.

## Compatibility

- **Browsers:** all modern browsers (Chrome, Firefox, Safari, Edge)
- **Node.js:** build tooling only — the editor requires a DOM at runtime
- **TypeScript:** 5 and 6
- **Module formats:** ESM (`import`) and CJS (`require`)
- **Dependencies:** none

## License

MIT © [SynapxLab](https://github.com/synapxLab)

---

<a name="français"></a>

# @synapxlab/draw — Documentation française

Éditeur de dessin SVG sans dépendance — injectable dans n'importe quel projet. 7 outils, poignées de redimensionnement, rotation, panneau de propriétés. TypeScript natif, ESM + CJS.

---

## Installation

```bash
npm install @synapxlab/draw
```

## Utilisation

```typescript
import { DrawEditor } from '@synapxlab/draw';
import '@synapxlab/draw/style.css';

// Instancier une fois, réutiliser
const editor = new DrawEditor();

// Ouvrir la modal de dessin — le callback reçoit le SVG final
editor.open('', (svg) => {
  document.getElementById('canvas')!.innerHTML = svg;
});
```

Pour re-éditer un dessin existant, passez le SVG précédemment retourné :

```typescript
editor.open(existingSvg, (svg) => {
  monElement.innerHTML = svg;
});
```

## API

### `new DrawEditor()`

Crée une nouvelle instance et injecte la modal dans `document.body`. À appeler une seule fois, puis réutiliser.

### `editor.open(existingSvg, onInsert)`

| Paramètre | Type | Description |
|-----------|------|-------------|
| `existingSvg` | `string` | SVG existant à recharger pour modification — passer `''` pour un canvas vierge |
| `onInsert` | `(svgStr: string) => void` | Callback appelé quand l'utilisateur clique sur **Insérer** |

### `editor.destroy()`

Supprime les éléments DOM de l'éditeur. À appeler quand l'éditeur n'est plus nécessaire.

### `DrawEditorInterface`

Contrat typé pour le pattern injectable :

```typescript
interface DrawEditorInterface {
  open(existingSvg: string, onInsert: (svgStr: string) => void): void;
  destroy(): void;
}
```

## Outils

| Outil | Description |
|-------|-------------|
| `select` | Sélectionner, déplacer, redimensionner (8 poignées) et faire pivoter les formes |
| `pencil` | Dessin libre |
| `rect` | Rectangle |
| `ellipse` | Ellipse / cercle |
| `line` | Ligne droite |
| `arrow` | Ligne avec tête de flèche |
| `text` | Texte multiligne (Entrée = saut de ligne, Ctrl+Entrée pour valider) |

## Exemples

```typescript
// Canvas vierge
editor.open('', (svg) => {
  container.innerHTML = svg;
});

// Re-éditer un SVG sauvegardé
const saved = container.innerHTML; // '<svg ...>...</svg>'
editor.open(saved, (svg) => {
  container.innerHTML = svg;
});
```

## TypeScript

Les types sont inclus. Importez l'interface si vous souhaitez typer votre propre implémentation :

```typescript
import { DrawEditor, type DrawEditorInterface } from '@synapxlab/draw';

const editor: DrawEditorInterface = new DrawEditor();
editor.open('', (svg) => console.log(svg));
```

## Intégration avec @synapxlab/wysiwyg

Injectez `DrawEditor` comme dépendance opt-in pour que l'éditeur puisse insérer et re-éditer des dessins depuis sa barre d'outils :

```typescript
import { WysiwygEditor } from '@synapxlab/wysiwyg';
import { DrawEditor } from '@synapxlab/draw';
import '@synapxlab/draw/style.css';

new WysiwygEditor('#editor', {
  draw: DrawEditor,
  toolbar: { draw: true },
});
```

Un clic sur un dessin inséré ouvre le panneau propriétés (couleur de trait, remplissage, taille, alignement). Cliquez sur **Modifier le dessin** pour rouvrir l'éditeur avec les formes existantes rechargées.

## Compatibilité

- **Navigateurs :** tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Node.js :** outillage de build uniquement — l'éditeur nécessite un DOM à l'exécution
- **TypeScript :** 5 et 6
- **Formats de module :** ESM (`import`) et CJS (`require`)
- **Dépendances :** aucune

## Licence

MIT © [SynapxLab](https://github.com/synapxLab)
