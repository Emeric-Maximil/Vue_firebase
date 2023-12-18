<template>
	<div>
		<form @submit.prevent="saveArticle" v-if="submitted == false">
			<input v-model="article.title" placeholder="Title"/>
			<input v-model="article.desription" placeholder="Description"/>
			<button >button</button>
		</form>
		<h1 v-else>Ajouter un nouvel article ? </h1>
		<button @click="newArticle" v-else>Oui</button>
	</div>
</template>

<script>
import ArticleDataService from '../services/ArticleDataService';


export default {
	name : "add-article",
    data(){
        return{
            
			submitted : false,
			article : {
				title : "",
				published : false,
				}
        }
    },
    methods:{
		saveArticle(){
			const data = {
				title : this.article.title,
				desription : this.article.desription,
				published : false
			}
			ArticleDataService.create(data).then(()=>{
				this.submitted = true;
				console.log('Article créé');
			}).catch(error=>{
				  console.log(error);
			});
		},

		newArticle(){
			this.submitted = false;
			this.article = {
				title : "",
				desription : "",
				published : false
			}
		}
    },
}
</script>

<style scoped lang="css">
</style>