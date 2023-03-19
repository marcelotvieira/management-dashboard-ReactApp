import React from 'react';
import CategoryGraphic from './Graphics/ProjectCategoryGraphic';
import StatusGraphic from './Graphics/StatusGraphic';
import ValueGraphic from './Graphics/ValueGraphics';
import ProjectMonthValueGraphic from './Graphics/ProjectMonthValueGraphic';



function ProjectGraphics() {
  return <div className="graphics-container">
    
    <div>
      <h4 className="text-center" >Valores arrecadados nos últimos 6 mêses</h4>
      <p className="small-text text-center">Somatória de valores de projetos com status de Entregue</p>
      <ProjectMonthValueGraphic/>
    </div>
    <div>
      <h4 className="text-center" >Status de Projetos</h4>
      <p className="small-text text-center">Relação de projetos por Status</p>
      <StatusGraphic />
    </div>
    <div>
      <h4 className="text-center" >Categorias de Projetos</h4>
      <p className="small-text text-center">Relação de projetos por Categoria</p>

      <CategoryGraphic />
    </div>
    <div>
      <h4 className="text-center" >Valores de Projetos entregues</h4>
      <p className="small-text text-center">Relação de valores de projetos</p>

      <ValueGraphic />
    </div>

  </div>;
}

export default ProjectGraphics;