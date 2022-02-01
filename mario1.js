function piso(nPiso, altura){
nEspacios=altura-nPiso;
nNumerales=nPisos;
texto="<p>"
for(let i=0; i<nEspacios; i++)
{
    texto=texto+"&nbsp"

}
for(let i=0; i<nNumerales; i++)
{
    texto=texto + "#"
}
texto=texto + "</p>";
return texto;
