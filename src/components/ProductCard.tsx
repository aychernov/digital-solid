import {IProduct} from "~/constant";

type Props = {};
export const ProductCard = ({ image, title, badge, description, price }: IProduct) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
            {title}
          <div class="badge badge-secondary">{badge}</div>
        </h2>
        <p>{description}</p>

          <div> <span class="badge badge-primary">{price}</span> руб.</div>
        <div class="card-actions justify-end">
            <div class="tooltip" data-tip="После оплаты вы получите ссылку на видео, сохраните её">
          <button class="btn btn-primary">Купить доступ</button>
                </div>
        </div>
      </div>
    </div>
  );
};
