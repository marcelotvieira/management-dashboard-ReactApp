import React from 'react';
import CategoryGraphic from './Graphics/CategoryGraphic';
import StatusGraphic from './Graphics/StatusGraphic';
import ValueGraphic from './Graphics/ValueGraphics';



function ProjectGraphics() {
  return <div className="graphics-container">
    

    <div>
      <h4 className="text-center" >Status de Projetos</h4>
      <StatusGraphic />
    </div>
    <div>
      <h4 className="text-center" >Categorias de Projetos</h4>
      <CategoryGraphic />
    </div>
    <div>
      <h4 className="text-center" >Valores de Projetos entregues</h4>
      <ValueGraphic />
    </div>
  </div>;
}

export default ProjectGraphics;