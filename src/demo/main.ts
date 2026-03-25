import { DrawEditor } from '../draw';
import '../style.scss';

const openBtn  = document.getElementById('openBtn')!;
const result   = document.getElementById('result')!;

const editor = new DrawEditor();

openBtn.addEventListener('click', () => {
  const existing = result.querySelector('svg')?.outerHTML ?? '';
  editor.open(existing, (svgStr) => {
    result.innerHTML = `<div style="display:inline-block">${svgStr}</div>`;
  });
});
