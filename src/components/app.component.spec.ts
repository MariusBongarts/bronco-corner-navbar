import { LitElement } from 'lit-element';
import { BroncoCornerNavbar } from './app.component';
import './app.component';

describe('bronco-corner-navbar', () => {
  let element: BroncoCornerNavbar;


  beforeEach(async () => {
    localStorage.preferredLanguage = 'german';
    element = document.createElement('bronco-corner-navbar') as BroncoCornerNavbar;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render bronco-corner-navbar', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('');
  });



});
