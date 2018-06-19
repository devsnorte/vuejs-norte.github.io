<template>
  <div>
    <div v-for="(event, index) in events" key="index">
      <a :href="event.link" target="_blank">
        <h3>{{event.name}}</h3>
      </a>
      <span v-html="event.description"></span>
      <div class="section group">
      	<div class="col span_1_of_2">
      	   <h4>Data</h4>
           <span>{{format(event.local_date, 'dddd, LL')}}</span>
           <br>
           <span>Início: {{event.local_time}}</span>
      	</div>
      	<div class="col span_1_of_2">
      	   <h4>Local</h4>
           <span>{{event.venue.name}}</span>
           <br>
           <span>{{event.venue.address_1}}</span>
           <br>
           <span>{{event.venue.city}}, {{event.venue.localized_country_name}}</span>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  props: [],
  mounted() {
    axios.get('https://vuejs-back-api.herokuapp.com/meetup/events')
    .then(response => {
      this.events = response.data.reverse()
    })
    .catch(err => {
      console.error(err)
    })
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    format: function(date, format) {
      moment.locale('pt-BR');
      return moment(date).format(format)
    }
  }
}
</script>

<style scoped>

/*  SECTIONS  */
.section {
clear: both;
padding: 0px;
margin: 0px;
}

/*  COLUMN SETUP  */
.col {
display: block;
float:left;
margin: 1% 0 1% 1.6%;
}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }

/*  GRID OF TWO  */
.span_2_of_2 {
	width: 100%;
}
.span_1_of_2 {
	width: 49.2%;
}

/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */

@media only screen and (max-width: 480px) {
	.col {
		margin: 1% 0 1% 0%;
	}
}

@media only screen and (max-width: 480px) {
	.span_2_of_2, .span_1_of_2 { width: 100%; }
}
</style>
