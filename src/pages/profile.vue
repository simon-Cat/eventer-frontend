<script>
import EvenList from '../components/EventList.vue'

export default {
  data() {
    return {
      userEvents: [
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        },
        {
          title: 'Вечеринка в честь празднования нового года',
          description: `Значимость этих проблем настолько очевидна, что консультация с 
         широким активом влечет за собой процесс внедрения и модернизации систем  массового участия.
         Равным образом постоянный количественный рост и сфера нашей  активности позволяет оценить значение соответствующий условий  активизации.           Повседневная практика показывает, что сложившаяся структура
        организации играет важную роль в формировании соответствующий условий  активизации.`,
          creator: 'Екатерина Мурова',
          city: 'Санкт-Петербург',
          place: 'Площадь восстания',
          date: '10.11.2024',
          time: '',
          type: 'Частное мероприятие',
          followers: [
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            },
            {
              name: 'Екатерина Мурова'
            }
          ]
        }
      ]
    }
  },
  components: {
    EvenList
  }
}
</script>

<template>
  <section class="profile">
    <div class="vector" id="vector_1"></div>
    <div class="vector" id="vector_2"></div>
    <div class="profile-description">
      <img class="profile-logo" src="../assets/images/avatar.svg" alt="" />
      <div class="profile-data">
        <p class="user-name">Екатерина Мурова</p>
        <p class="user-email">murovakate@ya.ru</p>
      </div>
    </div>
    <button class="btn" type="button">Создать новое событие</button>
    <section class="user-events">
      <h2 class="title">Мои события</h2>
      <EvenList :events="userEvents" className="section" />
    </section>
  </section>
</template>

<style scoped>
.profile {
  padding-top: 60px;
  padding-bottom: 80px;
  position: relative;
}
.profile-description {
  max-width: 500px;
  margin: 0 auto 100px;
  display: flex;
  align-items: center;
  column-gap: 40px;
}

.profile-logo {
  display: block;
  width: 130px;
  height: 130px;
  object-fit: contain;
  border-radius: 50%;
}

.user-name {
  font-size: 35px;
  font-weight: var(----medium-font-weigth);
}

.user-email {
  font-size: 20px;
}

.btn {
  display: block;
  margin: 0 auto 150px;
  width: 100%;
  max-width: 50%;
  padding: 20px;
  background-color: var(--blue-color);
  color: var(--bg-color);
  font-size: 25px;
  text-align: center;
  border-radius: 10px;
  border: none;
  transition: opacity var(--transition);
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

.title {
  text-transform: uppercase;
  max-width: 250px;
  margin: 0 auto 50px;
  text-align: center;
  font-size: 30px;
}

.vector {
  position: absolute;
  z-index: -1;
  background-size: cover;
}

#vector_1 {
  width: 950px;
  height: 500px;
  background: url(../assets/images/vectors/profile-vector-1.svg) no-repeat;
  left: -380px;
  top: 190px;
}
#vector_2 {
  width: 500px;
  height: 815px;
  background: url(../assets/images/vectors/profile-vector-2.svg) no-repeat;
  right: 0;
  bottom: 50px;
}
</style>
