import { Alert } from 'antd';
import './styles/_404.scss'
export default function NotFoundPage() {
    return (
        <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-12 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		    Похоже, вы заблудились
		</h3>
		
		<p>Страница, которую вы ищете, недоступна!</p>
		
		<a href="/" class="link_404">Go Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    );
}