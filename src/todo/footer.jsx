import '../assets/styles/footer.styl'

export default{
    data(){
        return{
            author:'hht'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}