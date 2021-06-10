import { Injectable } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

    private showAlert(message: string, tipo: string){
      const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
      bsModalRef.content.type = tipo
      bsModalRef.content.messege = message
    }

    showAlertDanger (message: string){
      this.showAlert(message, 'danger')
    }

    showAlertSuccess (message: string){
      this.showAlert(message, 'success')
    }

    showAlertInfo (message: string){
      this.showAlert(message, 'info')
    }

}
