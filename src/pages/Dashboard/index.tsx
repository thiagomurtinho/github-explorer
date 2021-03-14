import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="https://">
          <img
            src="https://avatars.githubusercontent.com/u/12580485?s=460&u=cd3ae5a76b8402fd45c4d29f8bd837e48865d928&v=4"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo no Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="https://">
          <img
            src="https://avatars.githubusercontent.com/u/12580485?s=460&u=cd3ae5a76b8402fd45c4d29f8bd837e48865d928&v=4"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo no Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://">
          <img
            src="https://avatars.githubusercontent.com/u/12580485?s=460&u=cd3ae5a76b8402fd45c4d29f8bd837e48865d928&v=4"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo no Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://">
          <img
            src="https://avatars.githubusercontent.com/u/12580485?s=460&u=cd3ae5a76b8402fd45c4d29f8bd837e48865d928&v=4"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo no Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://">
          <img
            src="https://avatars.githubusercontent.com/u/12580485?s=460&u=cd3ae5a76b8402fd45c4d29f8bd837e48865d928&v=4"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo no Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
