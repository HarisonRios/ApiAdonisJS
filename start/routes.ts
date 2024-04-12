import MomentsController from '#controllers/moments_controller'
import router from '@adonisjs/core/services/router'


router.post('momentos', [MomentsController, 'store'])

router.get('momentos', [MomentsController, 'index'])

router.get('momentos/:id', [MomentsController, 'show'])

router.delete('momentos/:id', [MomentsController, 'destroy'])

router.patch('momentos/:id', [MomentsController, 'update'])