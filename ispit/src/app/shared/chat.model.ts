export interface Chat {
  id: string;
  prikaziIme: string;
  email: string;
  type: 'covek' | 'pridruzio';
  message: string;
  napravljenaPoruka: string; // za svaku pojedinacnu
  koJe: boolean;
}
