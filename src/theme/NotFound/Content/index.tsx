import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/NotFound/Content';
import Icon from '@site/src/components/Icon';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container', className)}>
      <div className="zauru-404">
        <p className="zauru-404__code">404</p>
        <h1 className="zauru-404__title">Página no encontrada</h1>
        <p className="zauru-404__text">
          La página que busca no existe o fue movida. Use la búsqueda para
          encontrar lo que necesita, o regrese al inicio de la documentación.
        </p>
        <div className="zauru-404__actions">
          <a href="/" className="zauru-404__btn zauru-404__btn--primary">
            <Icon name="house" />
            Volver al inicio
          </a>
          <a href="/contabilidad" className="zauru-404__btn zauru-404__btn--ghost">
            <Icon name="book" />
            Ver Contabilidad
          </a>
          <a href="/ventas" className="zauru-404__btn zauru-404__btn--ghost">
            <Icon name="sack-dollar" />
            Ver Ventas
          </a>
        </div>
      </div>
    </main>
  );
}
